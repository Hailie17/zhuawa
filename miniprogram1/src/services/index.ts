import { get } from '@/lib/request'
import { HomeRecommendListItem } from "./type";

export default class Services {
	static async getHomeRecommendList() {
		return get<HomeRecommendListItem[]>('/homeRecommendList')
	}
}