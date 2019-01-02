// @flow
import React from 'react'
import styled from '@emotion/styled'
import { HEADER_HEIGHT } from './Header'
import { rhythm } from 'utils/typography'

export const BagContainer = styled.div`
  display: ${({ isOpen }) => isOpen ? 'grid' : 'none'};
  grid-template-rows: auto 120px;
  height: 100vh;
  width: 100vw;
  background-color: white;
  position: fixed;
  top: 0;
  z-index: 900;
  padding-top: ${HEADER_HEIGHT};
`

export const BagContent = styled.div`
  padding: ${rhythm(1)};
  overflow-y: scroll;
`

export const BagHeader = styled.h2`
  margin-top: 0;
`

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`

export const ButtonText = styled.span`
  font-size: 16px;
  font-weight: bold;
`

export const CancelButton = styled.button`
  display: flex;
  padding: 1px ${rhythm(0.8)};
  background-color: gray;
  color: white;
  border: 1px solid gray;
  height: 50px;
  font-size: 12px;
  text-transform: uppercase;
  width: 100vw;
`

export const CheckoutButton = styled.button`
  display: flex;
  padding: 1px ${rhythm(0.8)};
  justify-content: space-between;
  background-color: black;
  color: white;
  border: 1px solid black;
  height: 60px;
  font-size: 12px;
  text-transform: uppercase;
  width: 100vw;
`

type BagProps = {
  isOpen: boolean,
  checkout: Function
}

const Bag = ({ isOpen, checkout }: BagProps) => (
  <BagContainer isOpen={isOpen}>
    <BagContent>
      <BagHeader>Bag</BagHeader>
      Spicy jalapeno bacon ipsum dolor amet aliqua spare ribs cupim sirloin, et nostrud ham hock est salami shankle cow fugiat irure. Excepteur dolore in, in fugiat mollit deserunt ham hock ball tip sunt eiusmod spare ribs proident filet mignon pariatur. Fugiat flank ball tip lorem ribeye. Tail flank dolore salami tri-tip turducken eu non et. Cupidatat excepteur flank minim. Bacon pariatur cow spare ribs pork belly ham ball tip. Officia bresaola aliqua short ribs, capicola beef consequat.

      Tri-tip drumstick biltong deserunt proident sint. Sint velit labore, pariatur laborum dolor alcatra ea. Labore excepteur ham hock capicola. Meatball ball tip elit, frankfurter capicola shank picanha alcatra ribeye beef. Pariatur pork loin aliquip burgdoggen hamburger ut sunt.

      Aute culpa dolore, ad doner tail quis sirloin kevin dolor minim. Excepteur tenderloin corned beef meatball, laborum eu cow anim jowl short ribs venison labore non id exercitation. Rump doner magna pork chop, adipisicing fatback pork loin. Ullamco reprehenderit ad cupim shoulder spare ribs do pastrami eu.

      Nulla sunt bresaola ut filet mignon ground round consequat nostrud eiusmod ut. Aliqua pancetta capicola, fatback commodo picanha frankfurter elit boudin pig. Fatback tenderloin shoulder bresaola pig jerky lorem. Dolore reprehenderit beef swine. Shoulder laborum ut frankfurter anim aute tongue jowl chicken esse. Ut biltong cow ea, ball tip cillum porchetta consequat pork loin lorem minim est. Quis minim tenderloin, aute doner ut consectetur flank ground round.

      Voluptate tongue ham hock reprehenderit chuck fatback officia. Alcatra ham hock bacon in in mollit commodo anim labore. Pork chop strip steak adipisicing excepteur hamburger in. Flank incididunt nulla fatback prosciutto mollit, consequat in irure in cillum. Duis kevin ipsum commodo occaecat ground round. Andouille sed chuck officia short loin ut pork belly pig in nostrud minim tempor.

      Magna velit tongue sint ad chicken ut incididunt consectetur do flank ribeye. Duis quis prosciutto qui pig aliquip bacon tail ham hock landjaeger labore porchetta. Reprehenderit qui culpa quis, prosciutto frankfurter officia veniam tempor landjaeger in aute. Ad beef ribs sed, pork belly nisi picanha velit ullamco adipisicing frankfurter alcatra. Cupim nulla tempor elit qui.

      Tongue doner filet mignon, picanha ipsum laborum consequat dolore venison alcatra et officia nulla brisket elit. Ham salami buffalo, fatback ea bresaola beef consequat alcatra venison officia chicken capicola. Chicken jerky minim, ball tip filet mignon prosciutto consequat non shank. Spare ribs ipsum ut landjaeger labore dolor burgdoggen turkey deserunt tongue andouille. Qui culpa reprehenderit tongue short ribs eu.

      Boudin ut laboris buffalo et consectetur do pork belly ham alcatra kevin landjaeger ut tenderloin. Culpa exercitation turkey aliqua laborum boudin officia pariatur lorem spare ribs occaecat. Laborum lorem pastrami occaecat short ribs buffalo beef ribs hamburger kielbasa picanha aliqua non. Voluptate kielbasa exercitation, swine capicola tongue eu excepteur quis ex ribeye in. Aute alcatra qui flank duis occaecat shankle. Sirloin pariatur eiusmod aute venison deserunt. Aliqua irure shankle sirloin ribeye.

      Ullamco incididunt meatloaf, salami sed sint magna kielbasa biltong proident. Nisi veniam chuck jerky id, swine exercitation elit beef ribs kielbasa enim. Tongue aute ut, ea cow short loin quis beef. Eu ea cillum, adipisicing strip steak voluptate et chuck occaecat non leberkas.

      Ea salami labore bacon ex sed swine cow irure anim pancetta. Veniam short ribs swine ea consequat. Elit officia ground round, corned beef minim jowl magna id cillum occaecat buffalo pork loin. Rump ground round salami, mollit tail anim in boudin meatball fugiat cupim cupidatat. In esse beef hamburger labore chicken spare ribs, exercitation drumstick.

      Tempor pork cow consectetur nisi shank rump. Consectetur kielbasa kevin eu beef nulla sint. Shoulder landjaeger exercitation tri-tip. Pastrami beef ribs ham hock et meatball eu ut ex nisi laboris spare ribs in. T-bone adipisicing quis esse alcatra buffalo pancetta andouille sunt porchetta kielbasa.

      Chuck deserunt reprehenderit drumstick fatback short ribs cupidatat doner swine ham hock spare ribs porchetta. Cupidatat tenderloin cow in meatloaf. Spare ribs capicola ex beef officia kevin buffalo leberkas consectetur pork belly elit drumstick dolore deserunt tri-tip. T-bone pork loin occaecat ut jerky meatloaf capicola id et swine prosciutto drumstick pariatur pancetta in. Biltong bacon eu duis. Mollit sausage anim quis exercitation strip steak hamburger bacon eu ham qui cupim et do.

      Chuck capicola in incididunt ut sint. Frankfurter turducken strip steak pariatur meatball kevin. Nostrud pork chop capicola, ea non magna hamburger. Cupidatat burgdoggen consectetur ea andouille veniam. Turducken ad biltong quis, eu ut consectetur aliquip culpa adipisicing aliqua cupim meatball ex turkey.

      Pancetta minim beef ribs anim officia shoulder nisi ham hock chicken lorem deserunt bresaola irure aliqua venison. Enim swine commodo, fatback ham porchetta pastrami meatloaf rump ea shank sirloin. Ut nulla bacon spare ribs aute ut cillum chuck. In enim nisi dolor, laborum short ribs eu nostrud ham laboris prosciutto lorem mollit sed flank. Strip steak reprehenderit tenderloin tempor do esse meatball voluptate andouille jerky kielbasa cow ham hock aute. Ground round dolor mollit chicken, ullamco in exercitation sed deserunt corned beef.

      Prosciutto salami ham, tongue ground round laboris duis cupidatat chicken bacon. Turducken ball tip ham jerky est minim. Proident in hamburger, turkey pork minim esse elit. Turducken pig landjaeger, buffalo cupidatat strip steak duis ex meatloaf.

      Magna nulla eu pork chop elit duis, est velit. Venison sint turducken consectetur sausage chuck burgdoggen. Picanha aliqua kielbasa pancetta andouille enim incididunt, cillum lorem est qui magna pariatur ea in. Ball tip veniam chicken nisi shankle reprehenderit. Doner lorem minim, ground round ball tip voluptate quis ad commodo landjaeger bacon meatloaf. Porchetta frankfurter sausage do venison incididunt minim strip steak eiusmod chicken in alcatra prosciutto pork chop. Rump porchetta sint doner voluptate cupim beef.

      Pork chop voluptate aute, ut nisi chicken sirloin kevin landjaeger pork belly tri-tip turkey hamburger doner ad. Officia ground round fugiat, incididunt anim laboris consectetur t-bone pork non. Spare ribs brisket magna esse officia. Enim shankle ut salami. Velit shankle cupim exercitation id, pork chop pastrami eiusmod prosciutto laborum strip steak meatloaf boudin.

      Nisi nostrud ball tip cow sausage laboris chicken voluptate tail proident quis eiusmod capicola. Voluptate beef ribs salami sint bresaola. Tenderloin ball tip duis cupim chicken pig mollit labore elit strip steak. Tri-tip exercitation consectetur, meatball doner mollit sirloin capicola velit chuck aliqua. Ullamco laboris fatback dolore reprehenderit shank minim deserunt voluptate consectetur. Eiusmod nulla velit sed, labore rump flank picanha. Spare ribs strip steak proident, enim sirloin duis consequat laboris ullamco magna est pork loin.

      Minim adipisicing anim, ex esse eiusmod mollit jowl aliqua sint magna bacon flank nulla turkey. Meatloaf kielbasa cillum, eu tongue pancetta dolore consectetur tenderloin. Nulla pork chop ullamco burgdoggen veniam adipisicing. Commodo excepteur id, shank venison burgdoggen porchetta in beef est meatloaf jowl ad flank pig. Chuck culpa consectetur pork chop fugiat. Cow tenderloin strip steak non qui.

      Dolore picanha laborum biltong corned beef ex pancetta capicola pastrami ad excepteur swine. Reprehenderit landjaeger non nulla aute minim ullamco. Quis qui nisi ut dolor excepteur burgdoggen ut anim doner ground round reprehenderit exercitation sirloin. Turkey pork chop burgdoggen lorem, est cupidatat ham irure picanha prosciutto bacon pariatur aliquip bresaola. Incididunt laboris ham tempor pastrami.

      Jerky dolore elit shoulder, spare ribs id culpa meatball non ut swine pork chop. Andouille proident filet mignon frankfurter boudin, capicola meatball. Eu shankle drumstick enim ad dolore porchetta kielbasa aliqua dolor. Ribeye pork chop pork, tri-tip do swine tongue cupim esse tempor officia quis beef ribs incididunt.

      Ground round turducken voluptate, anim chuck elit qui enim pork chop veniam mollit andouille fatback corned beef. Fatback rump ham hock pork belly consequat meatball aute tail cow buffalo kevin ground round eiusmod aliqua. Meatloaf elit velit chicken laborum prosciutto cupim aliqua non. Dolore cillum ut strip steak, tenderloin corned beef bacon labore nisi ribeye meatball velit frankfurter exercitation culpa. Mollit in culpa nostrud nisi tri-tip consequat sed eu brisket aute filet mignon magna.

      Consequat qui quis ea strip steak. In bacon pastrami, proident t-bone meatloaf meatball. In turkey porchetta burgdoggen. Salami dolore cillum, nulla burgdoggen sirloin lorem excepteur pork culpa cow. Pariatur pork andouille sunt sirloin sint ut minim alcatra jowl strip steak. Deserunt nisi tongue turkey quis enim ut filet mignon magna capicola hamburger picanha meatloaf short loin.

      Nostrud chuck lorem officia alcatra. Brisket laborum andouille tail bacon. Nisi corned beef consectetur est consequat, drumstick aute salami tail. Veniam ham chuck eu do laborum, fatback hamburger qui burgdoggen ullamco ham hock beef ribs rump. Irure meatball brisket, magna sirloin cupidatat landjaeger anim fugiat.

      Esse kielbasa proident, andouille turducken non pork loin cupim consectetur rump short loin. Minim hamburger sunt, kielbasa aute burgdoggen voluptate non pork loin capicola short ribs. Pork burgdoggen irure jerky, sausage salami pig chicken short ribs in in pariatur pork belly. Short ribs ullamco enim jowl. Andouille rump flank in. Pariatur shank eiusmod short loin adipisicing laborum, tempor shoulder bresaola ham hock.

      Qui exercitation alcatra proident. Sunt irure anim filet mignon consequat porchetta, tail boudin flank leberkas sint ground round qui esse cupidatat. Ut pig doner tempor nostrud bacon irure turkey. Pork belly filet mignon ribeye, dolore chicken tenderloin labore biltong meatloaf aute tail.

      Do et pork belly beef incididunt swine exercitation frankfurter dolor in consectetur picanha officia. Porchetta pork belly ad anim. Cow bresaola dolore ut in tenderloin burgdoggen, turducken ball tip. Drumstick excepteur brisket cupidatat pancetta andouille ut venison tongue ipsum culpa. Deserunt laborum dolor leberkas, duis pancetta buffalo beef ribs tenderloin. Pastrami andouille burgdoggen, veniam cillum salami minim pariatur tongue elit ut velit pork. Laboris adipisicing chicken, nostrud ball tip labore duis eiusmod esse burgdoggen reprehenderit dolor.

      Excepteur mollit andouille in ut. Rump reprehenderit tenderloin alcatra pariatur. Qui spare ribs sed beef prosciutto ut quis reprehenderit cillum ex tail id. Jowl ullamco anim capicola.

      Porchetta rump nostrud laboris ham, ad pig ut occaecat. Pariatur magna ut boudin laboris duis consequat. Cupim salami culpa, ad ut pork chop tail lorem eiusmod spare ribs picanha est. Do pancetta nostrud dolor in sed short ribs quis sunt swine pig.

      Swine elit nostrud cillum, landjaeger pariatur ut beef ribs picanha venison. Kevin veniam cow brisket flank. Consectetur tenderloin meatball, doner dolor proident pork loin ham hock turkey strip steak magna ground round. Landjaeger brisket nostrud hamburger pork sirloin leberkas ball tip. Elit short loin anim tenderloin, ribeye kevin veniam beef ribs aliquip. Spare ribs tempor chuck prosciutto occaecat pork chop turducken sed nulla magna elit ut veniam nisi.

      Leberkas chuck kielbasa ut biltong excepteur et, incididunt tenderloin. Sausage landjaeger short ribs salami consequat ad. Occaecat excepteur tongue aliqua porchetta cupim turducken doner. Deserunt tongue voluptate cupidatat velit proident dolore reprehenderit. Cow meatball kevin, in sausage leberkas cupidatat reprehenderit. Flank rump non corned beef turducken short loin irure in. Ham hock swine beef ribs doner.

      Exercitation fugiat burgdoggen frankfurter do corned beef nostrud aute adipisicing pariatur t-bone pastrami jerky tri-tip tongue. Pig spare ribs nulla exercitation, turkey kielbasa dolor laboris sint occaecat bacon tongue magna ut. Occaecat lorem shankle, capicola irure excepteur exercitation culpa est. Ex leberkas sed chicken hamburger anim doner sunt pork ham hock ground round esse incididunt enim.

      Velit pork belly bacon meatball laborum, do ut. Officia leberkas aliqua short loin. Buffalo lorem kevin boudin cupidatat pork belly voluptate. Chuck ham strip steak, leberkas frankfurter proident tongue alcatra veniam ribeye sausage fugiat sunt. Nisi do rump adipisicing sed filet mignon. Exercitation hamburger incididunt, chicken kevin sed venison adipisicing meatloaf aliquip ipsum. Salami drumstick fugiat, consequat est in anim culpa dolor occaecat pastrami.

      Cillum leberkas ut, in biltong sunt anim ground round pork loin bacon swine. Quis ball tip meatball alcatra frankfurter. Shankle swine officia kevin. Ut jerky cillum duis t-bone. Incididunt alcatra buffalo commodo, corned beef cow voluptate beef ball tip landjaeger pancetta jowl ea.

      Aliquip exercitation non prosciutto id. Dolore pancetta sint pork pig tempor pastrami. Eu dolore boudin mollit consequat shoulder. Adipisicing kielbasa cupidatat rump consectetur, aliqua enim elit.

      Dolore lorem burgdoggen strip steak elit nisi ut frankfurter excepteur mollit ham hamburger ball tip ribeye brisket. Fugiat biltong boudin, filet mignon tail aliquip buffalo elit hamburger ullamco jerky in eu. Fatback chuck cupim, ad frankfurter corned beef proident ea. Adipisicing dolor ad ham hock in burgdoggen proident tri-tip shankle short ribs venison ullamco. Alcatra shankle pastrami salami, turducken exercitation boudin in beef ribs. Alcatra id adipisicing minim pastrami corned beef flank sint boudin t-bone ground round prosciutto.

      Picanha excepteur deserunt, ut elit meatloaf burgdoggen anim eu in pork belly pancetta. Enim jowl ball tip laboris. Short loin ut eu tongue jowl duis ea nisi, id cupidatat beef ribs chicken occaecat. Boudin chuck quis spare ribs.

      Labore eu est buffalo spare ribs quis ut irure velit proident sed. Mollit lorem boudin quis leberkas ut pastrami aliqua. Salami fugiat pork chop spare ribs ut anim veniam. Id aliqua ut venison excepteur pariatur ullamco flank enim culpa ut pork cow.

      Lorem burgdoggen occaecat, kevin aliquip deserunt shank jowl ut. Lorem ground round nisi beef tri-tip, turducken ex frankfurter deserunt. Dolor culpa ut leberkas corned beef tenderloin shankle ham. Elit picanha bacon aliquip nisi.

      Meatball shank dolor, nulla reprehenderit doner elit tenderloin nostrud jowl buffalo. Proident sirloin alcatra t-bone occaecat. Exercitation sausage quis turducken flank ut, andouille filet mignon proident aute picanha nulla. Adipisicing qui fugiat in.

      Ipsum tail tempor nostrud excepteur pancetta consectetur hamburger consequat buffalo porchetta. Est jowl quis sirloin fugiat. Picanha salami jerky, capicola ground round adipisicing burgdoggen id laborum meatloaf cow rump ad jowl. Bresaola bacon rump dolore tenderloin.

      Short ribs hamburger exercitation corned beef ham hock sausage reprehenderit adipisicing biltong cupim pastrami drumstick quis tongue. Porchetta tongue lorem, esse hamburger nulla buffalo. Brisket chuck minim proident beef ribs pariatur. Salami tongue kielbasa, esse officia buffalo enim proident chuck cupidatat duis.

      Pariatur salami spare ribs exercitation tri-tip ex meatloaf andouille alcatra. Jowl mollit t-bone dolor. Turducken venison laborum pastrami, irure ribeye qui buffalo boudin magna andouille do in sirloin ipsum. Aute cow spare ribs ullamco shankle qui. Beef ribs pork chop shoulder, tempor ut est alcatra duis sausage ball tip velit eu aute meatloaf. Reprehenderit in capicola consequat. Deserunt voluptate do ut laborum ullamco qui shankle shoulder.

      Occaecat exercitation tail ut pancetta tenderloin, enim proident salami corned beef tongue adipisicing. Porchetta in bresaola, cow ribeye kielbasa ut consequat pastrami adipisicing labore shoulder aute meatball. Filet mignon pastrami pork chop sed leberkas. Culpa mollit boudin landjaeger swine enim occaecat eu incididunt sint est jerky. Kevin chuck ea ball tip porchetta laboris. Ham hock non enim porchetta.

      Chicken do nulla biltong shank ullamco andouille laborum. Excepteur leberkas salami, short loin duis sirloin turducken cow pancetta picanha. Sunt beef ribs beef nisi meatloaf fugiat. Ham hock turkey proident bresaola pork. Landjaeger beef eiusmod, ipsum tempor doner consequat short ribs. Ball tip eiusmod rump ut exercitation labore kevin pork chop minim swine.

      Flank ground round pork chop anim kielbasa ut do ut ball tip sed. Turkey chicken spare ribs, ribeye proident ex ut dolore ground round magna. Eiusmod tempor ribeye tail eu in duis ball tip beef ribs dolore. Consequat proident pastrami cow voluptate do. Beef ribs shank alcatra do, consectetur drumstick filet mignon minim proident jerky elit ea.

      Veniam ea do flank dolore sed. Capicola ea drumstick jerky doner velit. Beef ribs sirloin landjaeger dolore meatloaf consectetur chicken ribeye swine labore sed. T-bone velit exercitation tempor biltong tri-tip occaecat deserunt mollit id. Buffalo nisi deserunt, meatloaf ipsum in shankle beef ham alcatra. Salami dolore fugiat et, tongue meatball leberkas. Ipsum ut tri-tip, hamburger shankle leberkas buffalo sausage ground round pork loin.

      In jerky pork andouille. Occaecat ipsum kielbasa laborum porchetta pork belly. In spare ribs doner landjaeger nulla meatloaf. Eiusmod chicken consectetur sunt anim. Reprehenderit beef brisket flank lorem.

      Exercitation bacon sausage andouille kevin in veniam ut aliquip meatball ball tip ipsum porchetta. Tongue andouille occaecat ullamco meatloaf pork velit chicken aute ball tip do fugiat nisi laboris. Cow ea fugiat, t-bone dolore burgdoggen sausage venison id non ut aliquip cupidatat boudin rump. Bacon landjaeger shank, ex sint mollit beef ribs. Capicola pastrami voluptate labore irure nulla in elit sint doner. Pariatur swine proident labore.

      In pancetta occaecat reprehenderit pork chop cupidatat. Landjaeger qui eu strip steak bresaola aliqua shankle cillum. Consequat fatback ham ad. Adipisicing beef kevin pig elit biltong pork shoulder, irure turducken consequat pork belly ex. Deserunt ex frankfurter nulla shoulder. Salami consequat beef pork chop, est minim kevin ullamco leberkas doner.

      Turducken irure porchetta aliquip duis. Do t-bone hamburger burgdoggen jowl aliquip, meatball biltong pariatur flank irure capicola meatloaf in. In bresaola meatloaf, bacon doner voluptate pork chop corned beef porchetta sirloin filet mignon ut ea tempor. Non mollit exercitation, qui ullamco spare ribs sint laborum tenderloin irure burgdoggen veniam porchetta rump swine. Spare ribs cupim proident swine, shankle ut mollit minim pancetta laboris picanha sed id fatback meatloaf. Ex aliquip tempor quis, boudin prosciutto porchetta salami fatback venison kielbasa bacon. Meatball boudin ground round, nulla bresaola in frankfurter short ribs pancetta salami ut pork loin bacon adipisicing brisket.
    </BagContent>
    <ButtonContainer>
      <CancelButton>
        <ButtonText>
          Cancel
        </ButtonText>
      </CancelButton>
      <CheckoutButton>
        <ButtonText>Checkout</ButtonText>
        <span>100 USD</span>
      </CheckoutButton>
    </ButtonContainer>
  </BagContainer>
)

export default Bag
