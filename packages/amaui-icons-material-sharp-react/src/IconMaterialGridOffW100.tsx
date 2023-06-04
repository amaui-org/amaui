import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialGridOffW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='GridOffW100'

      short_name='GridOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m19.4 16.9-.7-.7v-1.5h-1.5l-.7-.7h2.2v-4h-4v2.2l-.7-.7V10h-1.5l-.7-.7H14v-4h-4v2.2l-.7-.7V5.3H7.8l-.7-.7h12.3Zm-4.7-7.6h4v-4h-4Zm6.7 13.1-3-3H4.6V5.6l-3-3 .5-.5 19.8 19.8Zm-6.7-3.7h3l-3-3ZM10 14h3l-3-3Zm0 4.7h4V15l-.3-.3H10ZM5.3 9.3h3l-3-3.05Zm0 4.7h4v-3.7L9 10H5.3Zm0 4.7h4v-4h-4Z"/>
    </Icon>
  );
});

IconMaterialGridOffW100.displayName = 'AmauiIconMaterialGridOffW100';

export default IconMaterialGridOffW100;
