import { useState } from "react";
import { tftCdnBaseUrl, tftImagesUrl } from "../scripts/links";
import { components, itemTable } from "../scripts/itemTable.js";

export function ItemSelector({ cdnVersion }) {
  const [leftComponent, setLeftComponent] = useState("bow");
  const [rightComponent, setRightComponent] = useState("bow");

  const handleComponentChange = (isLeftComponent, newComponent) => {
    if (isLeftComponent) {
      setLeftComponent(newComponent);
    } else {
      setRightComponent(newComponent);
    }
  };

  return (
    <>
      <label>
        Select a component:
      <select name="leftComponent" value={leftComponent} onChange={(e) => handleComponentChange(true, e.target.value)}>
        {components.keys().map((key) => (
          <option value={key} key={key}>{key}</option>
        ))}
      </select>
      </label>
      <label>
        Select another component:
        <select name="rightComponent" value={rightComponent} onChange={(e) => handleComponentChange(false, e.target.value)}>
          {components.keys().map((key) => (
            <option value={key} key={key}>{key}</option>
          ))}
        </select>
      </label>

      <div>
        <img src={`${tftCdnBaseUrl}/${cdnVersion}/${tftImagesUrl}/${components.get(leftComponent)}.png`} />
        <p>+</p>
        <img src={`${tftCdnBaseUrl}/${cdnVersion}/${tftImagesUrl}/${components.get(rightComponent)}.png`} />
        <p>=</p>
        <img src={`${tftCdnBaseUrl}/${cdnVersion}/${tftImagesUrl}/${itemTable.get(leftComponent)?.get(rightComponent)}.png`} />
      </div>

    </>
  );
}

export default ItemSelector;
