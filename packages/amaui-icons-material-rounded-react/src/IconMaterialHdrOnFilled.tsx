import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHdrOnFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HdrOnFilled'

      short_name='HdrOn'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M16.75 15q-.325 0-.538-.213Q16 14.575 16 14.25V10q0-.425.288-.713Q16.575 9 17 9h2.5q.6 0 1.05.45.45.45.45 1.05v1q0 .575-.262.887-.263.313-.638.513l.475 1.125q.175.425-.013.7-.187.275-.637.275-.175 0-.35-.113-.175-.112-.25-.262L18.6 13h-1.1v1.25q0 .325-.212.537-.213.213-.538.213Zm.75-3.5h2v-1h-2ZM3.75 15q-.325 0-.537-.213Q3 14.575 3 14.25v-4.5q0-.325.213-.538Q3.425 9 3.75 9q.325 0 .537.212.213.213.213.538V11h2V9.75q0-.325.213-.538Q6.925 9 7.25 9q.325 0 .537.212Q8 9.425 8 9.75v4.5q0 .325-.213.537Q7.575 15 7.25 15q-.325 0-.537-.213-.213-.212-.213-.537V12.5h-2v1.75q0 .325-.213.537Q4.075 15 3.75 15ZM10 15q-.2 0-.35-.15-.15-.15-.15-.35v-5q0-.2.15-.35Q9.8 9 10 9h3q.6 0 1.05.45.45.45.45 1.05v3q0 .6-.45 1.05Q13.6 15 13 15Zm1-1.5h2v-3h-2Z"/>
    </Icon>
  );
});

IconMaterialHdrOnFilled.displayName = 'AmauiIconMaterialHdrOnFilled';

export default IconMaterialHdrOnFilled;
