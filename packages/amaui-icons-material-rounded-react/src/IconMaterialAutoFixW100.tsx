import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAutoFixW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AutoFixW100'

      short_name='AutoFix'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m19.4 6.55-.65-1.4-1.4-.65 1.4-.65.65-1.4.65 1.4 1.4.65-1.4.65Zm-10.85 0-.65-1.4-1.4-.65 1.4-.65.65-1.4.65 1.4 1.4.65-1.4.65ZM19.4 17.4l-.65-1.4-1.4-.65 1.4-.65.65-1.4.65 1.4 1.4.65-1.4.65ZM5.2 20.1l-1.4-1.4q-.2-.2-.2-.5t.2-.5l9.8-9.75q.2-.2.5-.2t.5.2l1.4 1.4q.2.2.2.5t-.2.5L6.2 20.1q-.2.2-.5.2t-.5-.2Zm.5-.5 7.2-7.2-1.4-1.4-7.2 7.2Z"/>
    </Icon>
  );
});

IconMaterialAutoFixW100.displayName = 'AmauiIconMaterialAutoFixW100';

export default IconMaterialAutoFixW100;
