import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFactoryW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FactoryW100Filled'

      short_name='Factory'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.8 20.7q-.625 0-1.063-.438Q3.3 19.825 3.3 19.2v-7.35q0-.45.238-.825.237-.375.662-.55l2.45-1.05q.375-.15.713.05.337.2.337.625v.825l3.975-1.6q.375-.15.7.075.325.225.325.625V11.3h8v7.9q0 .625-.437 1.062-.438.438-1.063.438Zm15.8-10.1h-2.35l.85-6q.025-.125.125-.213.1-.087.275-.087.175 0 .275.087.1.088.125.213ZM12 17.4q.275 0 .488-.212.212-.213.212-.488v-1.4q0-.275-.2-.488-.2-.212-.5-.212-.275 0-.487.212-.213.213-.213.488v1.4q0 .275.2.488.2.212.5.212Zm-4 0q.275 0 .488-.212.212-.213.212-.488v-1.4q0-.275-.2-.488-.2-.212-.5-.212-.275 0-.487.212-.213.213-.213.488v1.4q0 .275.2.488.2.212.5.212Zm8 0q.275 0 .488-.212.212-.213.212-.488v-1.4q0-.275-.2-.488-.2-.212-.5-.212-.275 0-.487.212-.213.213-.213.488v1.4q0 .275.2.488.2.212.5.212Z"/>
    </Icon>
  );
});

IconMaterialFactoryW100Filled.displayName = 'AmauiIconMaterialFactoryW100Filled';

export default IconMaterialFactoryW100Filled;
