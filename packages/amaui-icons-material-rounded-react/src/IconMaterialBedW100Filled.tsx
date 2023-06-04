import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBedW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BedW100Filled'

      short_name='Bed'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.65 17.7q-.15 0-.25-.1t-.1-.25V13q0-.375.25-.863.25-.487.75-.687V9.3q0-.725.487-1.213Q5.275 7.6 6 7.6h4.65q.5 0 .825.212.325.213.525.588.2-.375.525-.588.325-.212.825-.212H18q.725 0 1.213.487.487.488.487 1.213v2.15q.5.2.75.687.25.488.25.863v4.35q0 .15-.1.25t-.25.1q-.15 0-.25-.1t-.1-.25V15.7H4v1.65q0 .15-.1.25t-.25.1Zm8.7-6.4H19v-2q0-.425-.288-.713Q18.425 8.3 18 8.3h-4.65q-.425 0-.712.287-.288.288-.288.713ZM5 11.3h6.65v-2q0-.425-.287-.713-.288-.287-.713-.287H6q-.425 0-.713.287Q5 8.875 5 9.3Z"/>
    </Icon>
  );
});

IconMaterialBedW100Filled.displayName = 'AmauiIconMaterialBedW100Filled';

export default IconMaterialBedW100Filled;
