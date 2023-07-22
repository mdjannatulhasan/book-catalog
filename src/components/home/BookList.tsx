import Container from '../common/Container';
import SecTitle from '../common/SecTitle';
import SubTitle from '../common/SubTitle';

const BookList = () => {
    return (
        <section className="py-12">
            <Container>
                <div className="flex flex-col justify-center items-center gap-5">
                    <SecTitle>New Horizons of Reading</SecTitle>
                    <SubTitle center>
                        Immerse Yourself in the Latest Literary Treasures. 10
                        Recently Added Books That Will Take You on a Journey of
                        Wonder and Reflection.
                    </SubTitle>
                </div>
            </Container>
        </section>
    );
};

export default BookList;
