import { Session } from "meteor/session";

Session.set("INDEX_OPTIONS", {
  template: "HomePage",
  layoutHeader: "MeteorNav",
  layoutFooter: "Footer"
});