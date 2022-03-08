import React from "react";

class SearchInput extends React.PureComponent {
  render() {
    const { query, handleOnInputChange } = this.props;
    return (
      <div
        className="search-box-container-header"
        style={{ paddingTop: "10px" }}
      >
        <section>
          <div className="ais-InstantSearch__root">
            <div className="ais-InstantSearch__root">
              <div className="ais-SearchBox">
                <label className="search-label" style={{ width: "80%" }}>
                  <input
                    type="text"
                    name="query"
                    value={query}
                    id="search-input"
                    placeholder="¿QUÉ PRODUCTO BUSCAS HOY?"
                    onChange={handleOnInputChange}
                    maxLength="512"
                    className="ais-SearchBox-input search-input"
                  />
                </label>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default SearchInput;
