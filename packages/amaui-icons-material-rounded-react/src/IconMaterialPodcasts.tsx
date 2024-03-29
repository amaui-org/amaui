import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPodcasts = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Podcasts'

      short_name='Podcasts'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.425 18.525Q3.3 17.2 2.65 15.537 2 13.875 2 12q0-2.075.788-3.9.787-1.825 2.137-3.175 1.35-1.35 3.175-2.138Q9.925 2 12 2t3.9.787q1.825.788 3.175 2.138 1.35 1.35 2.137 3.175Q22 9.925 22 12q0 1.875-.65 3.55-.65 1.675-1.775 3-.275.3-.675.3t-.7-.3q-.275-.275-.287-.688-.013-.412.262-.737.85-1.05 1.338-2.35Q20 13.475 20 12q0-3.35-2.325-5.675Q15.35 4 12 4 8.65 4 6.325 6.325 4 8.65 4 12q0 1.475.488 2.762.487 1.288 1.362 2.338.275.325.263.737-.013.413-.313.713t-.7.287q-.4-.012-.675-.312Zm2.825-2.85q-.575-.775-.912-1.7Q6 13.05 6 12q0-2.5 1.75-4.25T12 6q2.5 0 4.25 1.75T18 12q0 1.05-.337 2-.338.95-.913 1.7-.25.325-.663.325-.412 0-.737-.325-.275-.275-.288-.675-.012-.4.238-.775.35-.5.525-1.062Q16 12.625 16 12q0-1.65-1.175-2.825Q13.65 8 12 8q-1.65 0-2.825 1.175Q8 10.35 8 12q0 .65.188 1.2.187.55.512 1.05.25.375.225.787-.025.413-.3.688-.3.3-.712.287Q7.5 16 7.25 15.675ZM12 22q-.425 0-.712-.288Q11 21.425 11 21v-7.275q-.45-.275-.725-.713Q10 12.575 10 12q0-.825.588-1.413Q11.175 10 12 10t1.413.587Q14 11.175 14 12q0 .575-.275 1.025-.275.45-.725.7V21q0 .425-.287.712Q12.425 22 12 22Z"/>
    </Icon>
  );
});

IconMaterialPodcasts.displayName = 'AmauiIconMaterialPodcasts';

export default IconMaterialPodcasts;
