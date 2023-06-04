import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPhonelinkOffW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PhonelinkOffW100'

      short_name='PhonelinkOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m8.525 5.95-.7-.7h12.05q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Zm11.95 11.95-.7-.7V9.65h-4v3.55l-.7-.7V9.65q0-.3.2-.5t.5-.2h4q.3 0 .5.2t.2.5Zm-3.35.5h-1.35q-.3 0-.5-.2t-.2-.5v-1.35L5.725 7v10.35h4.825q.225 0 .375.15t.15.375q0 .225-.15.375t-.375.15h-7q-.225 0-.375-.15t-.15-.375q0-.225.15-.375t.375-.15h1.475V6.3l-1.85-1.85q-.05-.05-.075-.113-.025-.062-.025-.125 0-.062.025-.137.025-.075.075-.125.125-.125.25-.125t.25.125l16.3 16.3q.05.05.075.113.025.062.025.125 0 .062-.025.137-.025.075-.075.125-.125.125-.25.125t-.25-.125Z"/>
    </Icon>
  );
});

IconMaterialPhonelinkOffW100.displayName = 'AmauiIconMaterialPhonelinkOffW100';

export default IconMaterialPhonelinkOffW100;
