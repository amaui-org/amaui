import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMedicalInformationFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MedicalInformationFilled'

      short_name='MedicalInformation'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7 16v1q0 .425.287.712Q7.575 18 8 18t.713-.288Q9 17.425 9 17v-1h1q.425 0 .713-.288Q11 15.425 11 15t-.287-.713Q10.425 14 10 14H9v-1q0-.425-.287-.713Q8.425 12 8 12t-.713.287Q7 12.575 7 13v1H6q-.425 0-.713.287Q5 14.575 5 15t.287.712Q5.575 16 6 16Zm11.25-1.5q.325 0 .538-.213.212-.212.212-.537 0-.325-.212-.538Q18.575 13 18.25 13h-4.5q-.325 0-.537.212-.213.213-.213.538 0 .325.213.537.212.213.537.213Zm-2 3q.325 0 .538-.212.212-.213.212-.538 0-.325-.212-.538Q16.575 16 16.25 16h-2.5q-.325 0-.537.212-.213.213-.213.538 0 .325.213.538.212.212.537.212ZM15 7h5q.825 0 1.413.587Q22 8.175 22 9v11q0 .825-.587 1.413Q20.825 22 20 22H4q-.825 0-1.412-.587Q2 20.825 2 20V9q0-.825.588-1.413Q3.175 7 4 7h5V4q0-.825.588-1.413Q10.175 2 11 2h2q.825 0 1.413.587Q15 3.175 15 4Zm-4 2h2V4h-2Z"/>
    </Icon>
  );
});

IconMaterialMedicalInformationFilled.displayName = 'AmauiIconMaterialMedicalInformationFilled';

export default IconMaterialMedicalInformationFilled;
