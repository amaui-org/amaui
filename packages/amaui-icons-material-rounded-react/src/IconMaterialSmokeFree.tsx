import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSmokeFree = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SmokeFree'

      short_name='SmokeFree'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m18.85 16-.85-.85V13h1.5v3ZM17 14.15 15.85 13H17ZM20.5 16v-3H22v3Zm-1.4 5.9L13.2 16H3.5q-.625 0-1.062-.438Q2 15.125 2 14.5t.438-1.062Q2.875 13 3.5 13h6.7L2.1 4.9q-.275-.275-.275-.7 0-.425.275-.7.275-.275.7-.275.425 0 .7.275l17 17q.275.275.275.7 0 .425-.275.7-.275.275-.7.275-.425 0-.7-.275Zm-.35-9.9q-.325 0-.538-.213Q18 11.575 18 11.25v-.55q0-.975-.575-1.488Q16.85 8.7 16.05 8.7H14.5q-1.4 0-2.375-.975-.975-.975-.975-2.375 0-1.175.713-2.075.712-.9 1.787-1.175.325-.1.588.137.262.238.262.638 0 .225-.175.425-.175.2-.45.3-.525.2-.875.662-.35.463-.35 1.088 0 .8.55 1.325.55.525 1.3.525h1.55q1.4 0 2.425.9t1.025 2.25v.9q0 .325-.212.537-.213.213-.538.213Zm2.5 0q-.325 0-.538-.213-.212-.212-.212-.537v-1.5q0-1.5-.95-2.625t-2.4-1.375q-.275-.05-.462-.263-.188-.212-.188-.537 0-.3.15-.525.15-.225.5-.35.4-.15.687-.45.288-.3.413-.7.1-.275.288-.425.187-.15.412-.15.4 0 .638.275.237.275.137.625-.125.425-.35.8-.225.375-.525.7 1.4.65 2.275 2t.875 3v1.5q0 .325-.212.537-.213.213-.538.213Z"/>
    </Icon>
  );
});

IconMaterialSmokeFree.displayName = 'AmauiIconMaterialSmokeFree';

export default IconMaterialSmokeFree;
