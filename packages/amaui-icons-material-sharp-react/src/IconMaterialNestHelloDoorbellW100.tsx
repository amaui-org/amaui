import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNestHelloDoorbellW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NestHelloDoorbellW100'

      short_name='NestHelloDoorbell'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 21.35q-1.825 0-3.087-1.263Q7.65 18.825 7.65 17V7q0-1.825 1.263-3.088Q10.175 2.65 12 2.65q1.825 0 3.088 1.262Q16.35 5.175 16.35 7v10q0 1.825-1.262 3.087Q13.825 21.35 12 21.35Zm0-.7q1.475 0 2.562-1.088Q15.65 18.475 15.65 17V7q0-1.575-1.088-2.613Q13.475 3.35 12 3.35q-1.475 0-2.562 1.037Q8.35 5.425 8.35 7v10q0 1.475 1.088 2.562Q10.525 20.65 12 20.65Zm0-2.8q.775 0 1.312-.538.538-.537.538-1.312t-.538-1.312q-.537-.538-1.312-.538t-1.312.538q-.538.537-.538 1.312t.538 1.312q.537.538 1.312.538Zm0-.7q-.525 0-.837-.362-.313-.363-.313-.788 0-.425.313-.788.312-.362.837-.362.525 0 .838.312.312.313.312.838 0 .425-.312.788-.313.362-.838.362Zm0-7.3q.775 0 1.312-.538.538-.537.538-1.312t-.538-1.313Q12.775 6.15 12 6.15t-1.312.537Q10.15 7.225 10.15 8q0 .775.538 1.312.537.538 1.312.538ZM12 12Z"/>
    </Icon>
  );
});

IconMaterialNestHelloDoorbellW100.displayName = 'AmauiIconMaterialNestHelloDoorbellW100';

export default IconMaterialNestHelloDoorbellW100;
