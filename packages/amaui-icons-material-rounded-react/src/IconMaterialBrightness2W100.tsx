import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBrightness2W100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Brightness2W100'

      short_name='Brightness2'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8.85 4h-.525q-.25 0-.475.05 1.425 1.65 2.212 3.687.788 2.038.788 4.263t-.788 4.262Q9.275 18.3 7.85 19.95q.225.05.475.05h.525q3.325 0 5.663-2.337Q16.85 15.325 16.85 12t-2.337-5.663Q12.175 4 8.85 4Zm8.625 8q0 1.8-.687 3.387-.688 1.588-1.875 2.763-1.188 1.175-2.763 1.862-1.575.688-3.375.688-.25 0-.475-.012-.225-.013-.45-.038-.3-.025-.512-.225-.213-.2-.213-.5 0-.125.037-.262.038-.138.138-.238 1.325-1.5 2.038-3.45.712-1.95.737-3.975.05-2.025-.662-3.975-.713-1.95-2.038-3.45-.1-.1-.137-.238Q7.2 4.2 7.2 4.075q0-.3.212-.5.213-.2.513-.225.225-.025.45-.038Q8.6 3.3 8.85 3.3q1.8 0 3.375.687 1.575.688 2.75 1.863t1.85 2.762q.675 1.588.65 3.388Zm-6.625 0Z"/>
    </Icon>
  );
});

IconMaterialBrightness2W100.displayName = 'AmauiIconMaterialBrightness2W100';

export default IconMaterialBrightness2W100;
