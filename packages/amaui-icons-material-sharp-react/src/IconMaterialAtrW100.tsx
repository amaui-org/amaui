import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAtrW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AtrW100'

      short_name='Atr'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7.2 18.25q-.925 0-1.587-.663Q4.95 16.925 4.95 16q0-.95.663-1.6.662-.65 1.587-.65.95 0 1.6.65.65.65.65 1.6 0 .925-.65 1.587-.65.663-1.6.663Zm9.6 0q-.925 0-1.587-.663-.663-.662-.663-1.587 0-.95.663-1.6.662-.65 1.587-.65.95 0 1.6.65.65.65.65 1.6 0 .925-.65 1.587-.65.663-1.6.663Zm-4.8-8q-.925 0-1.587-.663Q9.75 8.925 9.75 8q0-.95.663-1.6.662-.65 1.587-.65.95 0 1.6.65.65.65.65 1.6 0 .925-.65 1.587-.65.663-1.6.663Z"/>
    </Icon>
  );
});

IconMaterialAtrW100.displayName = 'AmauiIconMaterialAtrW100';

export default IconMaterialAtrW100;
