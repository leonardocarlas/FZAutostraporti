import enJson from './en/translation.json';
import itJson from './it/translation.json';
import {Page} from "../../constants/page";
import fromJsonToObj from '../../utils/serializer';

export interface Resources {
   enPage : Page,
   itPage : Page,
};

const resources = {} as Resources;
resources.enPage = fromJsonToObj(enJson);
resources.itPage = fromJsonToObj(itJson);

export default resources;
