import React from "react";
import { shallow } from "enzyme";
import App from "../../src/App";

let mockDate;

beforeAll(() => {
  mockDate = jest.spyOn(Date.prototype, 'toLocaleTimeString').mockReturnValue('2020-04-15');
});

it("renders App is correct", () => {
  const wrapper = shallow(<App />);

  expect(wrapper.html()).toEqual(
    '<div class=\"App\"><div><div class=\"site-header compact\" style=\"background-color:#0879c9\"><div class=\"header-wrapper\" style=\"display:flex;padding:20px\"><div class=\"logo\" style=\"padding-left:100px\"><a href=\"/catalogo\"><img src=\"test-file-stub\" style=\"width:152px;height:50px;margin-top:8px;margin-left:10px;padding-top:6px;margin-bottom:6px\"/></a></div><div style=\"width:95%;margin:0px 3%\"><div class=\"search-width\"><div class=\"search-box-container-header\" style=\"padding-top:10px\"><section><div class=\"ais-InstantSearch__root\"><div class=\"ais-InstantSearch__root\"><div class=\"ais-SearchBox\"><label class=\"search-label\" style=\"width:80%\"><input type=\"text\" name=\"query\" value=\"\" id=\"search-input\" placeholder=\"¿QUÉ PRODUCTO BUSCAS HOY?\" maxLength=\"512\" class=\"ais-SearchBox-input search-input\"/></label></div></div></div></section></div></div></div></div></div><div><div><span style=\"color:rgb(0, 0, 0);font-weight:bold\"></span></div></div></div></div>'
  );
});
