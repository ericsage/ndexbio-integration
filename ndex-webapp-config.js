angular.module('ndexServiceApp').constant('config',
{
    welcome: "NDEx Web App deployed at a test server (NDEx v1.3)",
    logoLink:
    {
        // logoLink doesn't have label property, since we use NDEX logo image instead of text label
        href:        "http://www.ndexbio.org",
        warning:     "Warning! Dragons ahead... Click OK to proceed at your own risk or click CANCEL to go back to safety.",
        showWarning: true
    },
    aboutLink:
    {
        label:       "About",
        href:        "http://www.ndexbio.org/about-ndex",
        warning:     "Warning! Dragons ahead... Click OK to proceed at your own risk or click CANCEL to go back to safety.",
        showWarning: true 
    },
    documentationLink:
    {
        label:       "Docs",
        href:        "http://www.ndexbio.org/quick-start",
        warning:     "Warning! Dragons ahead... Click OK to proceed at your own risk or click CANCEL to go back to safety.",
        showWarning: true 
    },
    apiLink:
    {
        label:       "API",
        //href:        "http://public.ndexbio.org/#/api",
        href:        "#/api",
        warning:     "Warning! You are about to leave your organization's domain. Would you like to follow this link?",
        showWarning: true 
    },
    reportBugLink:
    {
        label:       "Report Bug",
        href:        "http://www.ndexbio.org/report-a-bug",
        warning:     "Warning! You are about to leave your organization's domain. Would you like to follow this link?",
        showWarning: true
    },
    contactUsLink:
    {
        label:       "Contact Us",
        href:        "http://www.ndexbio.org/contact-us",
        warning:     "Warning! You are about to leave your organization's domain. Would you like to follow this link?",
        showWarning: true 
    },

    messages:
    {
	serverDown: "<img src='http://www.ndexbio.org/wp-content/uploads/2015/06/manteinance2.png'>"
    },
    requireAuthentication: false,
    signIn:
    {
        header: "Sign in to your NDEx account",
        footer: "Need an account?",
        showForgotPassword: true,
        showSignup: true
    },
    //ndexServerUri: "http://52.27.81.136/rest",
    //ndexServerUri: "http://dev2.ndexbio.org/rest",
    //ndexServerUri: "http://localhost:8080/ndexbio-rest",
    // ndexServerUri: "http://ws1.ndexbio.org/rest",
    ndexServerUri: "http://dev2.ndexbio.org/rest",
    networkQueryLimit: 15000,
    networkDisplayLimit: 300,
    networkTableLimit: 500,
    idleTime: 3600,
    uploadSizeLimit: "none"
});
