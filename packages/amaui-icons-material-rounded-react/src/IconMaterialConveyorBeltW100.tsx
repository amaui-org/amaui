import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialConveyorBeltW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ConveyorBeltW100'

      short_name='ConveyorBelt'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5 18.4q-.725 0-1.212-.487Q3.3 17.425 3.3 16.7q0-.725.488-1.212Q4.275 15 5 15h14q.725 0 1.213.488.487.487.487 1.212t-.487 1.213q-.488.487-1.213.487Zm0-.7h14q.425 0 .712-.287.288-.288.288-.713t-.288-.713Q19.425 15.7 19 15.7H5q-.425 0-.713.287Q4 16.275 4 16.7t.287.713q.288.287.713.287Zm7.3-4.7q-.325 0-.537-.213-.213-.212-.213-.537v-5.9q0-.325.213-.538.212-.212.537-.212h5.9q.325 0 .538.212.212.213.212.538v5.9q0 .325-.212.537-.213.213-.538.213Zm-.05-.7h6v-6h-6Zm-8.6-.65q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1H9.2q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Zm9.95-3h3.3q.15 0 .25-.1t.1-.25q0-.15-.1-.25t-.25-.1h-3.3q-.15 0-.25.1t-.1.25q0 .15.1.25t.25.1Zm-7.95 0q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1H9.2q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Zm6.6 3.65v-6 6Z"/>
    </Icon>
  );
});

IconMaterialConveyorBeltW100.displayName = 'AmauiIconMaterialConveyorBeltW100';

export default IconMaterialConveyorBeltW100;
