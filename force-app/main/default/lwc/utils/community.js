import { LightningElement } from "lwc";
import CommunityPath from "@salesforce/community/basePath";

export default class Community extends LightningElement {
    getBaseCommunityPath() {
        return "https://" + location.host + CommunityPath;
    }
}
