import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialEventRepeatFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EventRepeatFilled'

      short_name='EventRepeat'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5 22q-.825 0-1.413-.587Q3 20.825 3 20V6q0-.825.587-1.412Q4.175 4 5 4h1V3q0-.425.287-.713Q6.575 2 7 2t.713.287Q8 2.575 8 3v1h8V3q0-.425.288-.713Q16.575 2 17 2t.712.287Q18 2.575 18 3v1h1q.825 0 1.413.588Q21 5.175 21 6v6h-2v-2H5v10h7v2Zm14 2q-1.525 0-2.75-.812-1.225-.813-1.8-2.088-.2-.425.013-.763.212-.337.687-.337.2 0 .388.125.187.125.287.325.425.9 1.262 1.475.838.575 1.913.575 1.45 0 2.475-1.025Q22.5 20.45 22.5 19q0-1.45-1.025-2.475Q20.45 15.5 19 15.5q-.725 0-1.35.262-.625.263-1.1.738h.7q.325 0 .538.212.212.213.212.538 0 .325-.212.538-.213.212-.538.212H15q-.425 0-.712-.288Q14 17.425 14 17v-2.25q0-.325.213-.538.212-.212.537-.212.325 0 .538.212.212.213.212.538v.675q.675-.65 1.575-1.038Q17.975 14 19 14q2.075 0 3.538 1.463Q24 16.925 24 19t-1.462 3.538Q21.075 24 19 24Z"/>
    </Icon>
  );
});

IconMaterialEventRepeatFilled.displayName = 'AmauiIconMaterialEventRepeatFilled';

export default IconMaterialEventRepeatFilled;
