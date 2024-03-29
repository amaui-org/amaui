import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMergeType = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MergeType'

      short_name='MergeType'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M15.9 19.3 11 14.4V6.875l-1.9 1.9q-.275.275-.687.275-.413 0-.713-.3t-.3-.713q0-.412.3-.712l3.6-3.6q.15-.15.325-.213.175-.062.375-.062t.375.062q.175.063.325.213l3.6 3.6q.275.275.287.687.013.413-.287.713t-.712.3q-.413 0-.713-.3L13 6.875V13.6l4.325 4.325q.275.275.275.675t-.3.7q-.275.275-.7.275-.425 0-.7-.275Zm-9.175.025q-.3-.3-.3-.713 0-.412.275-.687l2.5-2.5 1.4 1.425-2.475 2.475q-.3.3-.713.288-.412-.013-.687-.288Z"/>
    </Icon>
  );
});

IconMaterialMergeType.displayName = 'AmauiIconMaterialMergeType';

export default IconMaterialMergeType;
