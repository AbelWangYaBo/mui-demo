import { atom } from "recoil";
import type { IBreadcurmb } from '@/types'


const breadcrumbsState = atom<IBreadcurmb[]>({
  key: "breadcrumbsState",
  default: []
});

export { breadcrumbsState };
