import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialStethoscopeCheckFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StethoscopeCheckFilled'

      short_name='StethoscopeCheck'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M13.5 22q-2.7 0-4.6-1.9Q7 18.2 7 15.5v-.575q-2.15-.35-3.575-2.013Q2 11.25 2 9V4q0-.425.288-.713Q2.575 3 3 3h2q0-.425.287-.713Q5.575 2 6 2t.713.287Q7 2.575 7 3v2q0 .425-.287.713Q6.425 6 6 6t-.713-.287Q5 5.425 5 5H4v4q0 1.65 1.175 2.825Q6.35 13 8 13q1.65 0 2.825-1.175Q12 10.65 12 9V5h-1q0 .425-.287.713Q10.425 6 10 6t-.712-.287Q9 5.425 9 5V3q0-.425.288-.713Q9.575 2 10 2t.713.287Q11 2.575 11 3h2q.425 0 .713.287Q14 3.575 14 4v5q0 2.25-1.425 3.912Q11.15 14.575 9 14.925v.575q0 1.875 1.312 3.188Q11.625 20 13.5 20Zm3.85-3.825 3.525-3.55q.3-.3.712-.3.413 0 .713.3t.3.712q0 .413-.3.713l-4.25 4.25q-.3.3-.713.3-.412 0-.712-.3L14.5 18.175q-.275-.3-.275-.713 0-.412.3-.712t.7-.3q.4 0 .7.3Z"/>
    </Icon>
  );
});

IconMaterialStethoscopeCheckFilled.displayName = 'AmauiIconMaterialStethoscopeCheckFilled';

export default IconMaterialStethoscopeCheckFilled;
