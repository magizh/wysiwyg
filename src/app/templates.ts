import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export default class TemplateService {
	horizontalFormCss = {
    authContainer: {
      display: "flex",
      height: null,
      width: "530px",
      margin: null,
      padding: "10px",
      "border-width": null,
      "border-color": null,
      background: "#CCC",//"green",
      color: null,
      "font-size": null,
      font: null,
    },
    authHeader: {
      display: "none",
      height: null,
      width: null,
      margin: null,
      padding: null,
      "border-width": null,
      "border-color": null,
      background: null,//"purple",
      color: null,
      "font-size": null,
      font: null,
    },
    authContent: {
      display: "flex",
      height: null,
      width: "100%",
      margin: "0",
      padding: "0",
      "border-width": null,
      "border-color": null,
      background: null,//"purple",
      color: null,
      "font-size": null,
      font: null,
    },
    authContentInner: {
      display: "flex",
      height: null,
      width: "100%",
      margin: "0",
      padding: "0",
      "border-width": null,
      "border-color": null,
      background: null,//"yellow",
      color: null,
      "font-size": null,
      font: null,
    },
    primaryAuth: {
      display: "flex",
      height: null,
      width: "100%",
      margin: "0",
      padding: "0",
      "border-width": null,
      "border-color": null,
      background: null,//"pink",
      color: null,
      "font-size": null,
      font: null,
    },
    primaryAuthForm: {
      display: "flex",
      height: null,
      width: "100%",
      margin: "0",
      padding: "0",
      "border-width": null,
      "border-color": null,
      background: null,//"blue",
      color: null,
      "font-size": null,
      font: null,
    },
    oFormContent: {
      display: null,
      height: null,
      width: "100%",
      margin: "0",
      padding: "0",
      "border-width": null,
      "border-color": null,
      background: null,//"lightblue",
      color: null,
      "font-size": null,
      font: null,
    },
    oFormFieldsetContainer: {
      display: "flex",
      height: null,
      width: null,
      margin: "0",
      padding: "0",
      "border-width": null,
      "border-color": null,
      background: null,//"crimson",
      color: null,
      "font-size": null,
      font: null,
    },
    oFormFieldset: {
      display: null,
      height: null,
      width: null,
      margin: "0 !important",
      padding: null,
      "border-width": "0px !important",
      "border-color": null,
      background: null,
      color: null,
      "font-size": null,
      font: null,
    },
    oFormButtonBar: {
      display: null,
      height: null,
      width: null,
      margin: "0",
      padding: "0",
      "border-width": null,
      "border-color": null,
      background: null,//"crimson",
      color: null,
      "font-size": null,
      font: null,
    },
    authFooter: {
      display: "none",
      height: null,
      width: null,
      margin: null,
      padding: null,
      "border-width": null,
      "border-color": null,
      background: null,
      color: null,
      "font-size": null,
      font: null,
    },
    registrationContainer: {
      display: "none",
      height: null,
      width: null,
      margin: null,
      padding: null,
      "border-width": null,
      "border-color": null,
      background: null,
      color: null,
      "font-size": null,
      font: null,
    },
    signInLabel: {
      display: "none",
      height: null,
      width: null,
      margin: null,
      padding: null,
      "border-width": null,
      "border-color": null,
      background: "yellow",
      color: "purple",
      fontSize: "20px",
      font: "bold",
    },
    username: {
      display: null,
      height: null,
      width: null,
      margin: null,
      padding: null,
      "border-radius": "0",
      "border-width": "0px",
      "border-color": null,
      background: null,
      color: null,
      fontSize: null,
      font: null,
    },
    password: {
      display: null,
      height: null,
      width: "200px",
      margin: "0 0 0 9px",
      padding: null,
      "border-radius": "0",
      "border-width": "0px",
      "border-color": null,
      background: null,
      color: null,
      fontSize: null,
      font: null
    },
    signInButton: {
      display: null,
      height: "38px",
      width: null,
      margin: null,
      padding: null,
      "border-radius": "0",
      "border-width": "0px",
      "border-color": null,
      background: "#EB7072",
      color: "#FFF",
      fontSize: null,
      font: null
    }
  };

  darkThemeCss = {
    authContainer: {
      display: null,
      height: null,
      width: null,
      margin: null,
      padding: null,
      "border-width": null,
      "border-color": "#000000",
      background: "#222222",
      color: null,
      "font-size": null,
      font: null,
    },
    authHeader: {
      display: null,
      height: null,
      width: null,
      margin: null,
      padding: null,
      "border-width": null,
      "border-color": "#111",
      background: null,
      color: null,
      "font-size": null,
      font: null,
    },
    authContent: {
      display: null,
      height: null,
      width: null,
      margin: null,
      padding: null,
      "border-width": null,
      "border-color": null,
      background: null,
      color: null,
      "font-size": null,
      font: null,
    },
    authContentInner: {
      display: null,
      height: null,
      width: null,
      margin: null,
      padding: null,
      "border-width": null,
      "border-color": null,
      background: null,
      color: null,
      "font-size": null,
      font: null,
    },
    primaryAuth: {
      display: null,
      height: null,
      width: null,
      margin: null,
      padding: null,
      "border-width": null,
      "border-color": null,
      background: null,
      color: null,
      "font-size": null,
      font: null,
    },
    primaryAuthForm: {
      display: null,
      height: null,
      width: null,
      margin: null,
      padding: null,
      "border-width": null,
      "border-color": null,
      background: null,
      color: null,
      "font-size": null,
      font: null,
    },
    oFormContent: {
      display: null,
      height: null,
      width: null,
      margin: null,
      padding: null,
      "border-width": null,
      "border-color": null,
      background: null,
      color: null,
      "font-size": null,
      font: null,
    },
    oFormFieldsetContainer: {
      display: null,
      height: null,
      width: null,
      margin: null,
      padding: null,
      "border-width": null,
      "border-color": null,
      background: null,
      color: null,
      "font-size": null,
      font: null,
    },
    oFormFieldset: {
      display: null,
      height: null,
      width: null,
      margin: null,
      padding: null,
      "border-width": null,
      "border-color": null,
      background: null,
      color: null,
      "font-size": null,
      font: null,
    },
    oFormButtonBar: {
      display: null,
      height: null,
      width: null,
      margin: "0",
      padding: "0",
      "border-width": null,
      "border-color": null,
      background: null,
      color: null,
      "font-size": null,
      font: null,
    },
    authFooter: {
      display: null,
      height: null,
      width: null,
      margin: null,
      padding: null,
      "border-width": null,
      "border-color": null,
      background: null,
      color: "#dddddd",
      "font-size": null,
      font: null,
    },
    registrationContainer: {
      display: null,
      height: null,
      width: null,
      margin: null,
      padding: null,
      "border-width": null,
      "border-color": null,
      background: null,
      color: null,
      "font-size": null,
      font: null,
    },
    signInLabel: {
      display: null,
      height: null,
      width: null,
      margin: null,
      padding: null,
      "border-width": null,
      "border-color": null,
      background: null,
      color: "#dddddd",
      fontSize: null,
      font: null,
    },
    username: {
      display: null,
      height: null,
      width: null,
      margin: null,
      padding: null,
      "border-radius": "0",
      "border-width": "0",
      "border-color": null,
      background: "#111",
      color: "#dddddd",
      fontSize: null,
      font: null,
    },
    password: {
      display: null,
      height: null,
      width: null,
      margin: null,
      padding: null,
      "border-radius": "0",
      "border-width": "0",
      "border-color": null,
      background: "#111",
      color: "#dddddd",
      fontSize: null,
      font: null
    },
    signInButton: {
      display: null,
      height: null,
      width: null,
      margin: null,
      padding: null,
      "border-radius": "0",
      "border-width": null,
      "border-color": "#111",
      background: "#111",
      color: "#dddddd",
      fontSize: null,
      font: null
    }
  };

  trendy = {
    authContainer: {
      display: "flex",
      height: null,
      width: "530px",
      margin: null,
      padding: "10px",
      "border-width": null,
      "border-color": null,
      background: "#CCC",//"green",
      color: null,
      "font-size": null,
      font: null,
    },
    authHeader: {
      display: "none",
      height: null,
      width: null,
      margin: null,
      padding: null,
      "border-width": null,
      "border-color": null,
      background: null,//"purple",
      color: null,
      "font-size": null,
      font: null,
    },
    authContent: {
      display: "flex",
      height: null,
      width: "100%",
      margin: "0",
      padding: "0",
      "border-width": null,
      "border-color": null,
      background: null,//"purple",
      color: null,
      "font-size": null,
      font: null,
    },
    authContentInner: {
      display: "flex",
      height: null,
      width: "100%",
      margin: "0",
      padding: "0",
      "border-width": null,
      "border-color": null,
      background: null,//"yellow",
      color: null,
      "font-size": null,
      font: null,
    },
    primaryAuth: {
      display: "flex",
      height: null,
      width: "100%",
      margin: "0",
      padding: "0",
      "border-width": null,
      "border-color": null,
      background: null,//"pink",
      color: null,
      "font-size": null,
      font: null,
    },
    primaryAuthForm: {
      display: "flex",
      height: null,
      width: "100%",
      margin: "0",
      padding: "0",
      "border-width": null,
      "border-color": null,
      background: null,//"blue",
      color: null,
      "font-size": null,
      font: null,
    },
    oFormContent: {
      display: null,
      height: null,
      width: "100%",
      margin: "0",
      padding: "0",
      "border-width": null,
      "border-color": null,
      background: null,//"lightblue",
      color: null,
      "font-size": null,
      font: null,
    },
    oFormFieldsetContainer: {
      display: null,
      height: null,
      width: null,
      margin: "0",
      padding: "0",
      "border-width": null,
      "border-color": null,
      background: null,//"crimson",
      color: null,
      "font-size": null,
      font: null,
    },
    oFormFieldset: {
      display: null,
      height: null,
      width: null,
      margin: "0 !important",
      padding: null,
      "border-width": "0px !important",
      "border-color": null,
      background: null,
      color: null,
      "font-size": null,
      font: null,
    },
    oFormButtonBar: {
      display: null,
      height: null,
      width: null,
      margin: "0",
      padding: "0",
      "border-width": null,
      "border-color": null,
      background: null,//"crimson",
      color: null,
      "font-size": null,
      font: null,
    },
    authFooter: {
      display: "none",
      height: null,
      width: null,
      margin: null,
      padding: null,
      "border-width": null,
      "border-color": null,
      background: null,
      color: null,
      "font-size": null,
      font: null,
    },
    registrationContainer: {
      display: "none",
      height: null,
      width: null,
      margin: null,
      padding: null,
      "border-width": null,
      "border-color": null,
      background: null,
      color: null,
      "font-size": null,
      font: null,
    },
    signInLabel: {
      display: "none",
      height: null,
      width: null,
      margin: null,
      padding: null,
      "border-width": null,
      "border-color": null,
      background: "yellow",
      color: "purple",
      fontSize: "20px",
      font: "bold",
    },
    username: {
      display: null,
      height: null,
      width: null,
      margin: null,
      padding: null,
      "border-radius": "0",
      "border-width": "0px",
      "border-color": null,
      background: null,
      color: null,
      fontSize: null,
      font: null
    },
    password: {
      display: null,
      height: null,
      width: null,
      margin: "0",
      padding: null,
      "border-radius": "0",
      "border-width": "0px",
      "border-color": null,
      background: null,
      color: null,
      fontSize: null,
      font: null
    },
    signInButton: {
      display: null,
      height: "100%",
      width: null,
      margin: null,
      padding: null,
      "border-radius": "0",
      "border-width": "0px",
      "border-color": null,
      background: "#EB7072",
      color: "#FFF",
      fontSize: null,
      font: null
    }
  };

	getTemplate(name): object {
		switch(name) {
			case "horizontal": return this.horizontalFormCss;
      case "dark": return this.darkThemeCss;
      case "trendy": return this.trendy; 
			default:  return {};
		}
	}

	getFeatures(name): object {
		switch(name) {
			case "horizontal": return { rememberMe: false};
      case "trendy": return { rememberMe: false};
			default:  return {};
		}
	}

  getLogo(name): string {
    switch(name) {
      case "dark": return "https://2kwimw12hawf1l4unuqq6ro2-wpengine.netdna-ssl.com/wp-content/uploads/2017/12/mgmresorts-international-logo-2000x422.png";
      default:  return null;
    } 
  } 
}
