import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTranslateW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TranslateW100'

      short_name='Translate'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m11.95 20 3.65-9.6h1.65L20.9 20h-1.65l-.85-2.45h-3.9L13.65 20ZM15 16.15h2.85l-1.4-3.95h-.05ZM5.65 17.6 4.5 16.45l4.05-4.05q-.75-.825-1.312-1.725-.563-.9-.988-1.875H7.9q.375.725.775 1.287.4.563.975 1.213.9-.975 1.488-1.975.587-1 .962-2.125H3.25V5.6h5.6V4h1.6v1.6h5.6v1.6H13.7q-.425 1.4-1.138 2.738-.712 1.337-1.762 2.512l1.9 1.95-.6 1.65-2.45-2.45Z"/>
    </Icon>
  );
});

IconMaterialTranslateW100.displayName = 'AmauiIconMaterialTranslateW100';

export default IconMaterialTranslateW100;
