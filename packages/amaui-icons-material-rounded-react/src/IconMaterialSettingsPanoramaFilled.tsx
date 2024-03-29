import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSettingsPanoramaFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SettingsPanoramaFilled'

      short_name='SettingsPanorama'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m17 20-.3-1.5q-.3-.125-.562-.262-.263-.138-.538-.338l-1.45.45-1-1.7 1.15-1q-.05-.35-.05-.65 0-.3.05-.65l-1.15-1 1-1.7 1.45.45q.275-.2.538-.338.262-.137.562-.262L17 10h2l.3 1.5q.3.125.563.275.262.15.537.375l1.45-.5 1 1.75-1.15 1q.05.3.05.625t-.05.625l1.15 1-1 1.7-1.45-.45q-.275.2-.537.338-.263.137-.563.262L19 20Zm1-3q.825 0 1.413-.587Q20 15.825 20 15q0-.825-.587-1.413Q18.825 13 18 13q-.825 0-1.413.587Q16 14.175 16 15q0 .825.587 1.413Q17.175 17 18 17ZM3 18q-.425 0-.712-.288Q2 17.425 2 17V3q0-.425.288-.713Q2.575 2 3 2q.2 0 .888.237.687.238 1.837.513t2.713.512Q10 3.5 12 3.5q2 0 3.562-.238 1.563-.237 2.713-.512 1.15-.275 1.838-.513Q20.8 2 21 2q.425 0 .712.287Q22 2.575 22 3v6.25q-.85-.6-1.9-.925Q19.05 8 18 8q-.925 0-1.738.2-.812.2-1.562.625L14 8l-2.85 3.4-2-2.4-3.65 4.4q1.45-.2 2.9-.288 1.45-.087 2.925-.112-.275.825-.312 1.725-.038.9.162 1.775-1.7.05-3.062.275-1.363.225-2.388.475-1.15.275-1.837.512Q3.2 18 3 18Z"/>
    </Icon>
  );
});

IconMaterialSettingsPanoramaFilled.displayName = 'AmauiIconMaterialSettingsPanoramaFilled';

export default IconMaterialSettingsPanoramaFilled;
