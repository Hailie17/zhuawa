import { get } from '@/lib/request'
import { DetailInfo, HomeRecommendListItem } from "./type";

export default class Services {
	static async getHomeRecommendList() {
		console.log(get<HomeRecommendListItem[]>('/homeRecommendList'),111);
		return get<HomeRecommendListItem[]>('/homeRecommendList')
	}
	static async getList() {
		return get<DetailInfo[]>('/list')
	}
}