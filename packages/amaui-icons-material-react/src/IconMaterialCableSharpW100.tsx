import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCableSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CableSharpW100'
      short_name='Cable'

      {...props}
    >
      <path d="M4.65 20.35V18.85H3.65V15.15H5.65V7Q5.65 5.6 6.625 4.625Q7.6 3.65 9 3.65Q10.4 3.65 11.375 4.625Q12.35 5.6 12.35 7V17Q12.35 18.125 13.113 18.887Q13.875 19.65 15 19.65Q16.125 19.65 16.888 18.887Q17.65 18.125 17.65 17V8.85H15.65V5.15H16.65V3.65H19.35V5.15H20.35V8.85H18.35V17Q18.35 18.4 17.375 19.375Q16.4 20.35 15 20.35Q13.6 20.35 12.625 19.375Q11.65 18.4 11.65 17V7Q11.65 5.875 10.887 5.112Q10.125 4.35 9 4.35Q7.875 4.35 7.113 5.112Q6.35 5.875 6.35 7V15.15H8.35V18.85H7.35V20.35Z"/>
    </Icon>
  );
});

IconMaterialCableSharpW100.displayName = 'AmauiIconMaterialCableSharpW100';

export default IconMaterialCableSharpW100;
