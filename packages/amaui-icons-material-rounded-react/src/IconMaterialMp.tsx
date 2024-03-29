import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMp = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Mp'

      short_name='Mp'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M14.25 15q.325 0 .538-.213.212-.212.212-.537v-.75h2q.425 0 .712-.288.288-.287.288-.712V10q0-.425-.288-.713Q17.425 9 17 9h-2.5q-.425 0-.712.287-.288.288-.288.713v4.25q0 .325.213.537.212.213.537.213Zm.75-3v-1.5h1.5V12Zm-8.25 3q.325 0 .537-.213.213-.212.213-.537V10.5h1v2.25q0 .325.213.537.212.213.537.213.325 0 .538-.213.212-.212.212-.537V10.5h1v3.75q0 .325.213.537.212.213.537.213.325 0 .538-.213.212-.212.212-.537V10q0-.425-.287-.713Q11.925 9 11.5 9H7q-.425 0-.713.287Q6 9.575 6 10v4.25q0 .325.213.537.212.213.537.213ZM5 21q-.825 0-1.413-.587Q3 19.825 3 19V5q0-.825.587-1.413Q4.175 3 5 3h14q.825 0 1.413.587Q21 4.175 21 5v14q0 .825-.587 1.413Q19.825 21 19 21ZM19 5H5v14h14V5ZM5 19V5v14Z"/>
    </Icon>
  );
});

IconMaterialMp.displayName = 'AmauiIconMaterialMp';

export default IconMaterialMp;
