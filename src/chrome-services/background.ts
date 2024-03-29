import { DataPoint } from "../types";
import { v4 as uuid } from 'uuid';

chrome.runtime.onInstalled.addListener(async () => {
  chrome.contextMenus.create({
    id: "save-selection",
    title: "Save selection",
    type: "normal",
    contexts: ["selection"],
  });
});

chrome.contextMenus.onClicked.addListener(async (item, tab) => {
  const { selections } = await chrome.storage.local.get("selections");
  const selectionsSet = new Set<DataPoint>(selections);
  selectionsSet.add({
    id: uuid(),
    text: item.selectionText || "",
    websiteTitle: tab?.title,
    websiteUrl: tab?.url,
  });
  await chrome.storage.local.set({ selections: [...selectionsSet] });
});
