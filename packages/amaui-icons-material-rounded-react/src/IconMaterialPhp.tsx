import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPhp = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Php'

      short_name='Php'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10.25 15q-.325 0-.537-.213-.213-.212-.213-.537v-4.5q0-.325.213-.538Q9.925 9 10.25 9q.325 0 .538.212.212.213.212.538V11h2V9.75q0-.325.213-.538Q13.425 9 13.75 9q.325 0 .538.212.212.213.212.538v4.5q0 .325-.212.537-.213.213-.538.213-.325 0-.537-.213Q13 14.575 13 14.25V12.5h-2v1.75q0 .325-.212.537-.213.213-.538.213Zm-6.5 0q-.325 0-.537-.213Q3 14.575 3 14.25V10q0-.425.288-.713Q3.575 9 4 9h2.5q.6 0 1.05.45Q8 9.9 8 10.5v1q0 .6-.45 1.05Q7.1 13 6.5 13h-2v1.25q0 .325-.213.537Q4.075 15 3.75 15Zm.75-3.5h2v-1h-2ZM17.25 15q-.325 0-.538-.213-.212-.212-.212-.537V10q0-.425.288-.713Q17.075 9 17.5 9H20q.6 0 1.05.45.45.45.45 1.05v1q0 .6-.45 1.05Q20.6 13 20 13h-2v1.25q0 .325-.212.537-.213.213-.538.213Zm.75-3.5h2v-1h-2Z"/>
    </Icon>
  );
});

IconMaterialPhp.displayName = 'AmauiIconMaterialPhp';

export default IconMaterialPhp;
