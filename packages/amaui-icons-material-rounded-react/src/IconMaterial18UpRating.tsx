import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterial18UpRating = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='18UpRating'

      short_name='18UpRating'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5 21q-.825 0-1.413-.587Q3 19.825 3 19V5q0-.825.587-1.413Q4.175 3 5 3h14q.825 0 1.413.587Q21 4.175 21 5v14q0 .825-.587 1.413Q19.825 21 19 21Zm0-2h14V5H5v14ZM5 5v14Zm4.25 10q.325 0 .538-.213.212-.212.212-.537V10q0-.425-.287-.713Q9.425 9 9 9H7.725q-.3 0-.512.212Q7 9.425 7 9.75q0 .325.213.537.212.213.537.213h.75v3.775q0 .3.213.512.212.213.537.213Zm3.25 0H15q.425 0 .713-.288Q16 14.425 16 14v-4q0-.425-.287-.713Q15.425 9 15 9h-2.5q-.425 0-.712.287-.288.288-.288.713v4q0 .425.288.712.287.288.712.288Zm.5-3.5V10h1.5v1.5Zm0 2.5v-1.5h1.5V14Z"/>
    </Icon>
  );
});

IconMaterial18UpRating.displayName = 'AmauiIconMaterial18UpRating';

export default IconMaterial18UpRating;
