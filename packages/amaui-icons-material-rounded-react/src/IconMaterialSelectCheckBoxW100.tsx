import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSelectCheckBoxW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SelectCheckBoxW100'

      short_name='SelectCheckBox'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11.525 16.075 7.3 11.85l.5-.5 3.75 3.75 8.675-8.675.475.475ZM5.8 19.7q-.625 0-1.062-.438Q4.3 18.825 4.3 18.2V5.8q0-.625.438-1.063Q5.175 4.3 5.8 4.3h12.4q.275 0 .525.087.25.088.45.263l-.525.525q-.075-.075-.188-.125Q18.35 5 18.2 5H5.8q-.35 0-.575.225Q5 5.45 5 5.8v12.4q0 .35.225.575Q5.45 19 5.8 19h12.4q.35 0 .575-.225Q19 18.55 19 18.2v-6.775l.7-.7V18.2q0 .625-.437 1.062-.438.438-1.063.438Z"/>
    </Icon>
  );
});

IconMaterialSelectCheckBoxW100.displayName = 'AmauiIconMaterialSelectCheckBoxW100';

export default IconMaterialSelectCheckBoxW100;
