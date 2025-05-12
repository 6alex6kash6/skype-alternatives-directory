import { zadarmaReviews } from "./zadarma";
import { webexReviews } from "./webex";
import { voipbusterReviews } from "./voipbuster";
import { truphoneReviews } from "./truphone";
import { sonetelReviews } from "./sonetel";
import { ringcentralReviews } from "./ringcentral";
import { rebtelReviews } from "./rebtel";
import { pinger_incReviews } from "./pinger_inc";
import { phone_comReviews } from "./phone-com";
import { openphoneReviews } from "./openphone";
import { oomaReviews } from "./ooma";
import { nextivaReviews } from "./nextiva";
import { mightycallReviews } from "./mightycall";
import { magicjackReviews } from "./magicjack";
import { lineReviews } from "./line";
import { justcall_ioReviews } from "./justcall_io";
import { imo_messengerReviews } from "./imo";
import { gotoReviews } from "./goto-connect";
import { googleReviews } from "./google";
import { frejunReviews } from "./frejun";
import { dingtoneReviews } from "./dingtone";
import { chantyReviews } from "./chanty";
import { brosixReviews } from "./brosix";
import { aircallReviews } from "./aircall";
import { sipgateReviews } from "./sipgate_com_sipgate_brings_voip_to_your_iphone";
import { eightXEightReviews } from "./8x8";
import { viberReviews } from "./viber";
import { yollaReviews } from "./yolla";

export interface Review {
  id: number;
  author: string;
  avatar: string;
  rating: number;
  date: string;
  title: string;
  content: string;
  helpful: number;
  notHelpful: number;
}

export const allReviews: Record<string, Review[]> = {
  viber: viberReviews,
  yolla: yollaReviews,
  zadarma: zadarmaReviews,
  webex: webexReviews,
  voipbuster: voipbusterReviews,
  truphone: truphoneReviews,
  sonetel: sonetelReviews,
  ringcentral: ringcentralReviews,
  rebtel: rebtelReviews,
  textfree: pinger_incReviews,
  "phone-com": phone_comReviews,
  openphone: openphoneReviews,
  ooma: oomaReviews,
  nextiva: nextivaReviews,
  mightycall: mightycallReviews,
  magicjack: magicjackReviews,
  line: lineReviews,
  justcall: justcall_ioReviews,
  imo: imo_messengerReviews,
  "goto-connect": gotoReviews,
  google: googleReviews,
  frejun: frejunReviews,
  dingtone: dingtoneReviews,
  chanty: chantyReviews,
  brosix: brosixReviews,
  sipgate: sipgateReviews,
  "8x8": eightXEightReviews,
  aircall: aircallReviews,
};

export const getReviewsBySlug = (slug: string): Review[] => {
  return allReviews[slug] || [];
};

export const getAverageRating = (slug: string): number => {
  const reviews = getReviewsBySlug(slug);
  if (reviews.length === 0) return 0;

  const sum = reviews.reduce((total, review) => total + review.rating, 0);
  return parseFloat((sum / reviews.length).toFixed(1));
};

export const getReviewCount = (slug: string): number => {
  return getReviewsBySlug(slug).length;
};
