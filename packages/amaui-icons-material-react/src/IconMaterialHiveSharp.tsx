import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialHiveSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='HiveSharp'
      short_name='Hive'

      {...props}
    >
      <path d="M9.75 22 8.05 19H4.75L2.5 15L4.2 12L2.5 9L4.75 5H8.05L9.75 2H14.25L15.95 5H19.25L21.5 9L19.8 12L21.5 15L19.25 19H15.95L14.25 22ZM15.95 11H18.1L19.2 9L18.1 7H15.95L14.825 9ZM10.95 14H13.05L14.175 12L13.05 10H10.95L9.825 12ZM10.95 8H13.05L14.2 5.975L13.075 4H10.925L9.8 5.975ZM5.925 11H8.05L9.175 9L8.05 7H5.925L4.8 9ZM5.925 17H8.05L9.175 15L8.05 13H5.9L4.8 15ZM10.925 20H13.075L14.2 18.025L13.05 16H10.95L9.8 18.025ZM15.95 17H18.075L19.2 15L18.075 13H15.95L14.825 15Z"/>
    </Icon>
  );
});

IconMaterialHiveSharp.displayName = 'AmauiIconMaterialHiveSharp';

export default IconMaterialHiveSharp;
