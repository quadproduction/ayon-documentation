// export addons and features
import Addons, { type Addon as AddonType } from "./addons";
import Features, { type Feature as FeatureType } from "./features";

// create a list of tags from Features array
export const TagList: string[] = [];
Features.forEach((feature) => {
    feature.tags?.forEach((tag) => {
        if (!TagList.includes(tag)) {
            TagList.push(tag);
        }
    });
});

// if a features id is in an addons tags array, add the addon id to the features tags array
Addons.forEach((addon) => {
    // if addon has features
    Features.forEach((feature) => {
        if (addon.features?.includes(feature.id)) {
            if (!feature.addons?.includes(addon.id)) {
                feature.addons?.push(addon.id);
            }
        }
    });
});

export type Addon = AddonType & { id: string };
export const addons = Addons;

export type Feature = FeatureType & { addons: string[]; id: string };
export const features = Features;
