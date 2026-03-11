import { useState } from "react";
import { tftCdnBaseUrl, tftImagesUrl } from "../scripts/links";
import { components, itemTable } from "../scripts/itemTable.js";

export function ComponentSelector({ labelText, name, value, onChange }) {
  return (
    <>
      <label>
        {labelText}
      <select name={name} value={value} onChange={(e) => onChange(e.target.value)}>
        {components.keys().map((key) => (
          <option value={key} key={key}>{key}</option>
        ))}
      </select>
      </label>
    </>
  );
}

export function ItemSelector({ cdnVersion }) {
  const [leftComponent, setLeftComponent] = useState("bow");
  const [rightComponent, setRightComponent] = useState("bow");

  return (
    <>
      <ComponentSelector
        labelText="Select a component:"
        name="leftComponent"
        value={leftComponent}
        onChange={setLeftComponent}
      />
      <ComponentSelector
        labelText="Select another component:"
        name="rightComponent"
        value={rightComponent}
        onChange={setRightComponent}
      />
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
