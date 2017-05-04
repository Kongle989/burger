var express = require('express'),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override'),
    app = express();
app.use(methodOverride('_method'));