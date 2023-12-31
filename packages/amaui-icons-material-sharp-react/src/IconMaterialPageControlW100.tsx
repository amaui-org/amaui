import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPageControlW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PageControlW100'

      short_name='PageControl'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M159.911-410Q131-410 110.5-430.589 90-451.177 90-480.089 90-509 110.588-529.5q20.589-20.5 49.501-20.5Q189-550 209.5-529.411q20.5 20.588 20.5 49.5Q230-451 209.411-430.5q-20.588 20.5-49.5 20.5Zm.089-28q17 0 29.5-12.5T202-480q0-17-12.5-29.5T160-522q-17 0-29.5 12.5T118-480q0 17 12.5 29.5T160-438Zm211.911 28Q343-410 322.5-430.589q-20.5-20.588-20.5-49.5Q302-509 322.589-529.5q20.588-20.5 49.5-20.5Q401-550 421.5-529.411q20.5 20.588 20.5 49.5Q442-451 421.411-430.5q-20.588 20.5-49.5 20.5Zm.089-28q17 0 29.5-12.5T414-480q0-17-12.5-29.5T372-522q-17 0-29.5 12.5T330-480q0 17 12.5 29.5T372-438Zm213.911 28Q557-410 536.5-430.589q-20.5-20.588-20.5-49.5Q516-509 536.589-529.5q20.588-20.5 49.5-20.5Q615-550 635.5-529.411q20.5 20.588 20.5 49.5Q656-451 635.411-430.5q-20.588 20.5-49.5 20.5Zm.089-28q17 0 29.5-12.5T628-480q0-17-12.5-29.5T586-522q-17 0-29.5 12.5T544-480q0 17 12.5 29.5T586-438Zm213.911 28Q771-410 750.5-430.589q-20.5-20.588-20.5-49.5Q730-509 750.589-529.5q20.588-20.5 49.5-20.5Q829-550 849.5-529.411q20.5 20.588 20.5 49.5Q870-451 849.411-430.5q-20.588 20.5-49.5 20.5Z"/>
    </Icon>
  );
});

IconMaterialPageControlW100.displayName = 'AmauiIconMaterialPageControlW100';

export default IconMaterialPageControlW100;
