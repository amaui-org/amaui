import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFavorite = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Favorite'

      short_name='Favorite'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m10.65 19.8-1.725-1.575q-2.65-2.425-4.787-4.813Q2 11.025 2 8.15 2 5.8 3.575 4.225 5.15 2.65 7.5 2.65q1.325 0 2.5.562 1.175.563 2 1.538.825-.975 2-1.538 1.175-.562 2.5-.562 2.35 0 3.925 1.575Q22 5.8 22 8.15q0 2.875-2.125 5.275-2.125 2.4-4.825 4.825l-1.7 1.55q-.575.55-1.35.55-.775 0-1.35-.55Zm.4-13.05q-.725-1.025-1.55-1.563-.825-.537-2-.537-1.5 0-2.5 1t-1 2.5q0 1.3.925 2.762.925 1.463 2.213 2.838 1.287 1.375 2.65 2.575Q11.15 17.525 12 18.3q.85-.775 2.213-1.975 1.362-1.2 2.65-2.575 1.287-1.375 2.212-2.838Q20 9.45 20 8.15q0-1.5-1-2.5t-2.5-1q-1.175 0-2 .537-.825.538-1.55 1.563-.175.25-.425.375T12 7.25q-.275 0-.525-.125t-.425-.375Zm.95 4.725Z"/>
    </Icon>
  );
});

IconMaterialFavorite.displayName = 'AmauiIconMaterialFavorite';

export default IconMaterialFavorite;
