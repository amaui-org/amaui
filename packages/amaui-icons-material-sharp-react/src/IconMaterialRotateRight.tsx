import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRotateRight = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RotateRight'

      short_name='RotateRight'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M13.05 22v-2.05q.85-.125 1.663-.45.812-.325 1.537-.85l1.4 1.45q-1.05.8-2.2 1.287-1.15.488-2.4.613Zm-2 0q-3.45-.45-5.725-2.987Q3.05 16.475 3.05 13.05q0-1.875.713-3.513.712-1.637 1.925-2.85Q6.9 5.475 8.538 4.762q1.637-.712 3.512-.712h.15L10.65 2.5l1.4-1.45 4 4-4 4-1.4-1.4 1.6-1.6h-.2q-2.925 0-4.962 2.038Q5.05 10.125 5.05 13.05q0 2.6 1.7 4.563 1.7 1.962 4.3 2.337Zm8.05-3.35-1.45-1.4q.525-.725.85-1.538.325-.812.45-1.662H21q-.125 1.25-.612 2.4-.488 1.15-1.288 2.2Zm1.9-6.6h-2.05q-.125-.85-.45-1.663-.325-.812-.85-1.537l1.45-1.4q.8.975 1.275 2.15.475 1.175.625 2.45Z"/>
    </Icon>
  );
});

IconMaterialRotateRight.displayName = 'AmauiIconMaterialRotateRight';

export default IconMaterialRotateRight;
