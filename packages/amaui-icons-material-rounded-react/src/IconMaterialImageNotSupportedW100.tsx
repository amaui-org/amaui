import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialImageNotSupportedW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ImageNotSupportedW100'

      short_name='ImageNotSupported'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5.8 19.7q-.625 0-1.062-.438Q4.3 18.825 4.3 18.2V5.8q0-.125.012-.225.013-.1.063-.2L3.25 4.25q-.125-.125-.125-.25t.125-.25q.125-.125.25-.125t.25.125l16.5 16.5q.1.1.1.238 0 .137-.1.262-.125.125-.25.125t-.25-.125l-1.1-1.1q-.125.025-.225.038-.1.012-.225.012Zm0-.7H18l-2.65-2.65H8.1q-.25 0-.362-.225-.113-.225.037-.425l1.575-2.05q.125-.15.313-.162.187-.013.312.137L11.5 15.4l1.225-1.675L5 6v12.2q0 .35.225.575Q5.45 19 5.8 19Zm13.9-2.125-.7-.7V5.8q0-.35-.225-.575Q18.55 5 18.2 5H7.825l-.7-.7H18.2q.625 0 1.063.437.437.438.437 1.063Zm-6.225-6.225Zm-1.95 1.875Z"/>
    </Icon>
  );
});

IconMaterialImageNotSupportedW100.displayName = 'AmauiIconMaterialImageNotSupportedW100';

export default IconMaterialImageNotSupportedW100;
