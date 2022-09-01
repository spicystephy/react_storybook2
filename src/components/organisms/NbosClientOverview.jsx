import { NbosPage } from '../molecules/NbosPage'
import { NbosText } from '../atoms/NbosText'

export const NbosClientOverview = ({ client }) => {
  return (
    <NbosPage>
      <div className="tw-grid tw-grid-cols-3 tw-text-left tw-py-6 ">
        <div className="tw-flex tw-flex-col tw-p-4 tw-border-r-2">
          <NbosText text={client.totalRelationships} size="2xl" />
          <NbosText text="Total Relationships" size="sm" color="#71797E" />
        </div>
        <div className="tw-flex tw-flex-col tw-p-4 tw-border-r-2">
          <NbosText text={client.creditOnly} size="lg" />
          <NbosText
            text="Credit Only Relationships"
            size="sm"
            color="#71797E"
          />
          <NbosText text={client.highRelationships} size="lg" />
          <NbosText
            text="Relationships with <25k TTM Revenue"
            size="sm"
            color="#71797E"
          />
        </div>
        <div className="tw-flex tw-flex-col tw-p-4">
          <NbosText text={client.topProspects} size="lg" />
          <NbosText text="Top Prospects" size="sm" color="#71797E" />
          <NbosText text={client.suspects} size="lg" />
          <NbosText text="Suspects" size="sm" color="#71797E" />
        </div>
      </div>
    </NbosPage>
  )
}
