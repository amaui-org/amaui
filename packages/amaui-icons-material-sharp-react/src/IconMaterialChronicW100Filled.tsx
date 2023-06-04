import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialChronicW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChronicW100Filled'

      short_name='Chronic'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M413 843q-118-11-199.5-98.5T132 536q0-128.333 89.765-218.167Q311.529 228 439.765 228 568 228 658 317.833 748 407.667 748 536q0 62-23 116t-62 96H518q-41 0-70.5 27.5T413 843Zm107-207 20-20-86-86V362h-28v180l94 94Zm0 300h240q33 0 56.5-23.5T840 856q0-33-23.5-56.5T760 776H520q-33 0-56.5 23.5T440 856q0 33 23.5 56.5T520 936Zm.035-54Q509 882 501.5 874.535t-7.5-18.5q0-11.035 7.465-18.535t18.5-7.5q11.035 0 18.535 7.465t7.5 18.5q0 11.035-7.465 18.535t-18.5 7.5Zm120 0Q629 882 621.5 874.535t-7.5-18.5q0-11.035 7.465-18.535t18.5-7.5q11.035 0 18.535 7.465t7.5 18.5q0 11.035-7.465 18.535t-18.5 7.5Zm120 0Q749 882 741.5 874.535t-7.5-18.5q0-11.035 7.465-18.535t18.5-7.5q11.035 0 18.535 7.465t7.5 18.5q0 11.035-7.465 18.535t-18.5 7.5Z"/>
    </Icon>
  );
});

IconMaterialChronicW100Filled.displayName = 'AmauiIconMaterialChronicW100Filled';

export default IconMaterialChronicW100Filled;
