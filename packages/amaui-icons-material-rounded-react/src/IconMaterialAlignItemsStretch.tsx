import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAlignItemsStretch = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AlignItemsStretch'

      short_name='AlignItemsStretch'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M320 816q-17 0-28.5-11.5T280 776V376q0-17 11.5-28.5T320 336h40q17 0 28.5 11.5T400 376v400q0 17-11.5 28.5T360 816h-40Zm280 0q-17 0-28.5-11.5T560 776V376q0-17 11.5-28.5T600 336h40q17 0 28.5 11.5T680 376v400q0 17-11.5 28.5T640 816h-40ZM120 976q-17 0-28.5-11.5T80 936q0-17 11.5-28.5T120 896h720q17 0 28.5 11.5T880 936q0 17-11.5 28.5T840 976H120Zm0-720q-17 0-28.5-11.5T80 216q0-17 11.5-28.5T120 176h720q17 0 28.5 11.5T880 216q0 17-11.5 28.5T840 256H120Z"/>
    </Icon>
  );
});

IconMaterialAlignItemsStretch.displayName = 'AmauiIconMaterialAlignItemsStretch';

export default IconMaterialAlignItemsStretch;
