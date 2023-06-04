import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNestFarsightWeatherW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NestFarsightWeatherW100'

      short_name='NestFarsightWeather'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9 14.2h6.25q.625 0 1.038-.425.412-.425.412-1.025 0-.6-.4-1.025-.4-.425-1-.425h-.925l-.275-.95q-.2-.7-.788-1.125Q12.725 8.8 12 8.8q-.65 0-1.175.35t-.8.925L9.7 10.8h-.775q-.675.025-1.15.512Q7.3 11.8 7.3 12.5t.5 1.2q.5.5 1.2.5Zm0-.7q-.425 0-.712-.288Q8 12.925 8 12.5t.275-.7q.275-.275.675-.3h1.2l.5-1.125q.2-.425.563-.65.362-.225.787-.225.5 0 .9.287.4.288.525.788l.4 1.425h1.45q.325 0 .525.212.2.213.2.538 0 .3-.212.525-.213.225-.538.225Zm3 7.2q-1.8 0-3.387-.688-1.588-.687-2.763-1.862-1.175-1.175-1.863-2.763Q3.3 13.8 3.3 12t.687-3.388Q4.675 7.025 5.85 5.85t2.763-1.863Q10.2 3.3 12 3.3t3.388.687q1.587.688 2.762 1.863t1.863 2.762Q20.7 10.2 20.7 12q0 1.8-.687 3.387-.688 1.588-1.863 2.763-1.175 1.175-2.762 1.862Q13.8 20.7 12 20.7Zm0-.7q3.35 0 5.675-2.325Q20 15.35 20 12q0-3.35-2.325-5.675Q15.35 4 12 4 8.65 4 6.325 6.325 4 8.65 4 12q0 3.35 2.325 5.675Q8.65 20 12 20Zm0-8Z"/>
    </Icon>
  );
});

IconMaterialNestFarsightWeatherW100.displayName = 'AmauiIconMaterialNestFarsightWeatherW100';

export default IconMaterialNestFarsightWeatherW100;
