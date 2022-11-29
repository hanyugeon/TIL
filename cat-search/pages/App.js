import Header from "../components/Header.js";
import SearchResults from "../components/SearchResults.js";
import SuggestKeywords from "../components/SuggestKeywords.js";
import debounce from "../components/debounce.js";
import { request } from "../utils/api.js";
import { getItem, setItem } from "../utils/sessionStorage.js";

export default function App({ $target }) {
  this.state = {
    keyword: "",
    keywords: [],
    catImages: [],
  };

  this.cache = getItem("keywords_cache", {});

  const header = new Header({
    $target: $target,
    initialState: {
      keyword: this.state.keyword,
    },
    onKeywordInput: debounce(async (keyword) => {
      if (keyword.trim().length < 2) return;

      let keywords = undefined;

      if (this.cache[keyword]) {
        keywords = this.cache[keyword];
      } else {
        keywords = await request(`/keywords?q=${keyword}`);
        this.cache[keyword] = keywords;
        setItem("keywords_cache", keywords);
      }

      this.setState({
        ...this.state,
        keyword,
        keywords,
      });
    }, 300),
    onEnter: () => {
      fetchCatchImage();
    },
  });

  const suggestKeywords = new SuggestKeywords({
    $target: $target,
    initialState: {
      keywords: this.state.keywords,
      cursor: -1,
    },
    onKeywordSelect: (keyword) => {
      this.setState({
        ...this.state,
        keyword,
        keywords: [],
      });

      fetchCatchImage();
    },
  });

  const searchResults = new SearchResults({
    $target: $target,
    initialState: this.state.catImages,
  });

  this.setState = (nextState) => {
    this.state = nextState;

    if (this.state.keyword !== nextState.keyword) {
      header.setState({
        keyword: this.state.keyword,
      });
    }

    suggestKeywords.setState({
      keywords: this.state.keywords,
    });

    if (this.state.catImages.length > 0) {
      searchResults.setState(this.state.catImages);
    }
  };

  this.render = () => {};

  this.render();

  const fetchCatchImage = async () => {
    console.log(this.state.keyword);
    const { data } = await request(`/search?q=${this.state.keyword}`);

    this.setState({
      ...this.state,
      catImages: data,
      keyword: [],
    });
  };
}
