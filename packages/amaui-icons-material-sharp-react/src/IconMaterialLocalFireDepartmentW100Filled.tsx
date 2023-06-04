import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLocalFireDepartmentW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LocalFireDepartmentW100Filled'

      short_name='LocalFireDepartment'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10.175 20.45q-2.125-.6-3.5-2.363Q5.3 16.325 5.3 14q0-1.55.538-2.875Q6.375 9.8 7.188 8.7 8 7.6 8.95 6.75q.95-.85 1.75-1.425V6.3q0 1.525 1.025 2.412 1.025.888 2.3.888.5 0 .95-.15.45-.15.875-.425l.425-.275q1.125.95 1.775 2.312.65 1.363.65 2.938 0 2.325-1.375 4.087-1.375 1.763-3.5 2.363.575-.425.9-1.05.325-.625.325-1.35 0-.575-.225-1.125t-.65-.975L12 13.825 9.85 15.95q-.425.425-.662.963-.238.537-.238 1.137 0 .725.325 1.35.325.625.9 1.05Zm1.825-.1q-.975 0-1.662-.675Q9.65 19 9.65 18.05q0-.45.162-.85.163-.4.513-.75L12 14.8l1.675 1.65q.325.325.5.725.175.4.175.875 0 .95-.687 1.625-.688.675-1.663.675Z"/>
    </Icon>
  );
});

IconMaterialLocalFireDepartmentW100Filled.displayName = 'AmauiIconMaterialLocalFireDepartmentW100Filled';

export default IconMaterialLocalFireDepartmentW100Filled;
