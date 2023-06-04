import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPersonOffW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PersonOffW100'

      short_name='PersonOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m19.6 20.6-2.4-2.4H6.05q-.325 0-.537-.213-.213-.212-.213-.537v-.55q0-.55.338-1.037.337-.488.912-.763 1.375-.65 2.738-.975Q10.65 13.8 12 13.8h.413q.212 0 .412.025L3.4 4.4q-.1-.1-.112-.238-.013-.137.112-.262t.25-.125q.125 0 .25.125l16.2 16.2q.1.1.113.237.012.138-.113.263t-.25.125q-.125 0-.25-.125ZM6 17.5h10.5l-2.875-2.875q-.425-.05-.813-.088-.387-.037-.812-.037-1.325 0-2.613.312-1.287.313-2.487.888-.425.225-.662.538Q6 16.55 6 16.9Zm12-2.125Zm-4.475-4.65-.5-.5q.45-.275.713-.738Q14 9.025 14 8.5q0-.825-.587-1.412Q12.825 6.5 12 6.5q-.525 0-.987.262-.463.263-.738.713l-.5-.5q.375-.575.963-.875.587-.3 1.262-.3 1.125 0 1.913.788.787.787.787 1.912 0 .675-.3 1.262-.3.588-.875.963ZM16.5 17.5H6h7.625Zm-4.85-8.65Z"/>
    </Icon>
  );
});

IconMaterialPersonOffW100.displayName = 'AmauiIconMaterialPersonOffW100';

export default IconMaterialPersonOffW100;
