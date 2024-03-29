import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNestFarsightWeather = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NestFarsightWeather'

      short_name='NestFarsightWeather'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9 15.5h6.25q1.15 0 1.95-.812.8-.813.8-1.938t-.762-1.913q-.763-.787-1.888-.837-.325-1.125-1.25-1.812Q13.175 7.5 12 7.5q-1.025 0-1.875.537-.85.538-1.275 1.488-1.2.05-2.025.913Q6 11.3 6 12.5q0 1.25.875 2.125T9 15.5Zm0-2q-.425 0-.712-.288Q8 12.925 8 12.5t.275-.7q.275-.275.675-.3h1.2l.5-1.125q.2-.425.563-.65.362-.225.787-.225.5 0 .9.287.4.288.525.788l.4 1.425h1.45q.325 0 .525.212.2.213.2.538 0 .3-.212.525-.213.225-.538.225Zm3 8.5q-2.075 0-3.9-.788-1.825-.787-3.175-2.137-1.35-1.35-2.137-3.175Q2 14.075 2 12t.788-3.9q.787-1.825 2.137-3.175 1.35-1.35 3.175-2.138Q9.925 2 12 2t3.9.787q1.825.788 3.175 2.138 1.35 1.35 2.137 3.175Q22 9.925 22 12t-.788 3.9q-.787 1.825-2.137 3.175-1.35 1.35-3.175 2.137Q14.075 22 12 22Zm0-2q3.35 0 5.675-2.325Q20 15.35 20 12q0-3.35-2.325-5.675Q15.35 4 12 4 8.65 4 6.325 6.325 4 8.65 4 12q0 3.35 2.325 5.675Q8.65 20 12 20Zm0-8Z"/>
    </Icon>
  );
});

IconMaterialNestFarsightWeather.displayName = 'AmauiIconMaterialNestFarsightWeather';

export default IconMaterialNestFarsightWeather;
